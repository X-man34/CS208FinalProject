const express = require('express');
const { query } = require('../bin/db');

const router = express.Router();

const ORDER_URL = 'https://example.com/order-online';
const COMMENTS_PER_PAGE = 10;
const MAX_NAME_LENGTH = 80;
const MAX_BODY_LENGTH = 1000;
const MAX_STAR_RATING = 5;
const DEFAULT_SORT = 'recent';
const SORT_OPTIONS = new Set(['recent', 'rating_desc', 'rating_asc']);
const commentDateFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'long',
  timeStyle: 'short'
});

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About Us' },
  { href: '/comments', label: 'Comments' }
];

const featuredItems = [
  {
    title: 'Maple Morning',
    tag: 'Signature Donut',
    description: 'Lorem ipsum dolor sit amet.',
    accent: 'Buttery glaze and warm spice.'
  },
  {
    title: 'Vanilla Cloud',
    tag: 'Coffee Pairing',
    description: 'Lorem ipsum dolor sit amet.',
    accent: 'Made for a slow latte break.'
  },
  {
    title: 'Cinnamon Window',
    tag: 'Fresh Favorite',
    description: 'Lorem ipsum dolor sit amet.',
    accent: 'Bright, soft, and easy to grab.'
  }
];

const menuSections = [
  {
    title: 'Donuts',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    items: [
      { name: 'Classic Glazed', detail: 'Lorem ipsum dolor sit amet.' },
      { name: 'Berry Sprinkle', detail: 'Lorem ipsum dolor sit amet.' },
      { name: 'Espresso Twist', detail: 'Lorem ipsum dolor sit amet.' }
    ]
  },
  {
    title: 'Coffee',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    items: [
      { name: 'House Roast', detail: 'Lorem ipsum dolor sit amet.' },
      { name: 'Honey Latte', detail: 'Lorem ipsum dolor sit amet.' },
      { name: 'Cold Brew', detail: 'Lorem ipsum dolor sit amet.' }
    ]
  },
  {
    title: 'Featured',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    items: [
      { name: 'Weekend Box', detail: 'Lorem ipsum dolor sit amet.' },
      { name: 'Downtown Dozen', detail: 'Lorem ipsum dolor sit amet.' },
      { name: 'Office Coffee Run', detail: 'Lorem ipsum dolor sit amet.' }
    ]
  }
];

const storyMilestones = [
  {
    year: '1992',
    title: 'Neighborhood Roots',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    year: '2008',
    title: 'Morning Ritual',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    year: 'Today',
    title: 'Fresh Chapter',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];

const values = [
  {
    title: 'Warm Service',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Fresh Batches',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Community Table',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];

function renderPage(res, view, options = {}) {
  res.render(view, {
    navLinks,
    orderUrl: ORDER_URL,
    year: new Date().getFullYear(),
    ...options
  });
}

function normalizePage(rawPage, totalPages = 1) {
  const parsed = Number.parseInt(rawPage, 10);

  if (!Number.isInteger(parsed) || parsed < 1 || parsed > totalPages) {
    return 1;
  }

  return parsed;
}

function normalizeSort(rawSort) {
  return SORT_OPTIONS.has(rawSort) ? rawSort : DEFAULT_SORT;
}

function formatCommentDate(value) {
  return commentDateFormatter.format(new Date(value));
}

function validateCommentInput(body) {
  const parsedRating = Number.parseInt(body.star_rating, 10);
  const formData = {
    display_name: typeof body.display_name === 'string' ? body.display_name.trim() : '',
    body: typeof body.body === 'string' ? body.body.trim() : '',
    star_rating: Number.isInteger(parsedRating) ? String(parsedRating) : '5'
  };

  const fieldErrors = {};

  if (!formData.display_name) {
    fieldErrors.display_name = 'Enter your name.';
  } else if (formData.display_name.length > MAX_NAME_LENGTH) {
    fieldErrors.display_name = `Use ${MAX_NAME_LENGTH} characters or fewer for your name.`;
  }

  if (!formData.body) {
    fieldErrors.body = 'Enter a comment before submitting.';
  } else if (formData.body.length > MAX_BODY_LENGTH) {
    fieldErrors.body = `Use ${MAX_BODY_LENGTH} characters or fewer for your comment.`;
  }

  if (!Number.isInteger(parsedRating) || parsedRating < 1 || parsedRating > MAX_STAR_RATING) {
    fieldErrors.star_rating = 'Choose a star rating from 1 to 5.';
  }

  return { formData, fieldErrors };
}

function buildPagination(currentPage, totalPages) {
  return {
    currentPage,
    totalPages,
    hasPrevious: currentPage > 1,
    hasNext: currentPage < totalPages,
    previousPage: currentPage > 1 ? currentPage - 1 : 1,
    nextPage: currentPage < totalPages ? currentPage + 1 : totalPages
  };
}

function buildRatingSummary(rows, totalComments) {
  const counts = new Map(rows.map((row) => [row.star_rating, row.total]));
  const maxCount = rows.reduce((max, row) => Math.max(max, row.total), 0);
  const distribution = [];
  let weightedTotal = 0;

  for (let rating = MAX_STAR_RATING; rating >= 1; rating -= 1) {
    const count = counts.get(rating) ?? 0;
    weightedTotal += rating * count;
    distribution.push({
      rating,
      count,
      percentage: maxCount > 0 ? (count / maxCount) * 100 : 0
    });
  }

  return {
    averageRating: totalComments > 0 ? (weightedTotal / totalComments).toFixed(1) : '0.0',
    distribution
  };
}

async function fetchCommentsPage(rawPage, rawSort) {
  const sort = normalizeSort(rawSort);
  const sortSql = sort === 'rating_asc'
    ? 'star_rating ASC, created_at DESC, id DESC'
    : sort === 'rating_desc'
      ? 'star_rating DESC, created_at DESC, id DESC'
      : 'created_at DESC, id DESC';
  const countRows = await query('SELECT COUNT(*) AS total FROM comments');
  const distributionRows = await query(
    `SELECT star_rating, COUNT(*) AS total
     FROM comments
     GROUP BY star_rating
     ORDER BY star_rating DESC`
  );
  const totalComments = countRows[0]?.total ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalComments / COMMENTS_PER_PAGE));
  const currentPage = normalizePage(rawPage, totalPages);
  const offset = (currentPage - 1) * COMMENTS_PER_PAGE;

  const rows = await query(
    `SELECT id, display_name, body, star_rating, created_at
     FROM comments
     ORDER BY ${sortSql}
     LIMIT ? OFFSET ?`,
    [COMMENTS_PER_PAGE, offset]
  );

  return {
    comments: rows.map((row) => ({
      id: row.id,
      name: row.display_name,
      body: row.body,
      date: formatCommentDate(row.created_at),
      rating: row.star_rating
    })),
    totalComments,
    sort,
    ratingSummary: buildRatingSummary(distributionRows, totalComments),
    pagination: buildPagination(currentPage, totalPages)
  };
}

async function renderCommentsPage(res, options = {}) {
  const {
    statusCode = 200,
    notice = '',
    formError = '',
    fieldErrors = {},
    formData = { display_name: '', body: '', star_rating: '5' }
  } = options;

  try {
    const { comments, totalComments, pagination, sort, ratingSummary } = await fetchCommentsPage(
      options.page,
      options.sort
    );

    res.status(statusCode);
    renderPage(res, 'comments', {
      title: 'Customer Comments',
      pageTitle: 'Customer Comments | Downtown Donuts',
      currentPath: '/comments',
      notice,
      formError,
      fieldErrors,
      formData,
      comments,
      totalComments,
      sort,
      ratingSummary,
      pagination
    });
  } catch (error) {
    console.error('Error loading comments:', error);

    res.status(statusCode === 400 ? 400 : 503);
    renderPage(res, 'comments', {
      title: 'Customer Comments',
      pageTitle: 'Customer Comments | Downtown Donuts',
      currentPath: '/comments',
      notice: '',
      formError: 'Comments are temporarily unavailable. Check the database setup and try again.',
      fieldErrors,
      formData,
      comments: [],
      totalComments: 0,
      sort: normalizeSort(options.sort),
      ratingSummary: buildRatingSummary([], 0),
      pagination: buildPagination(1, 1)
    });
  }
}

router.get('/', function (req, res) {
  renderPage(res, 'home', {
    title: 'Downtown Donuts',
    pageTitle: 'Downtown Donuts | Cozy Donuts and Coffee',
    currentPath: '/',
    featuredItems
  });
});

router.get('/menu', function (req, res) {
  renderPage(res, 'menu', {
    title: 'Menu',
    pageTitle: 'Menu | Downtown Donuts',
    currentPath: '/menu',
    menuSections
  });
});

router.get('/about', function (req, res) {
  renderPage(res, 'about', {
    title: 'About Us',
    pageTitle: 'About Us | Downtown Donuts',
    currentPath: '/about',
    storyMilestones,
    values
  });
});

router.get('/comments', async function (req, res) {
  const notice = req.query.status === 'posted'
    ? 'Your comment was posted.'
    : '';

  await renderCommentsPage(res, {
    notice,
    page: req.query.page,
    sort: req.query.sort
  });
});

router.post('/comments', async function (req, res) {
  const { formData, fieldErrors } = validateCommentInput(req.body);

  if (Object.keys(fieldErrors).length > 0) {
    await renderCommentsPage(res, {
      statusCode: 400,
      formError: 'Fix the highlighted fields and submit again.',
      fieldErrors,
      formData,
      sort: req.query.sort
    });
    return;
  }

  try {
    await query(
      'INSERT INTO comments (display_name, body, star_rating) VALUES (?, ?, ?)',
      [formData.display_name, formData.body, Number.parseInt(formData.star_rating, 10)]
    );

    res.redirect(`/comments?status=posted&sort=${normalizeSort(req.query.sort)}`);
  } catch (error) {
    console.error('Error saving comment:', error);

    await renderCommentsPage(res, {
      statusCode: 503,
      formError: 'We could not save your comment right now. Please try again.',
      formData,
      sort: req.query.sort
    });
  }
});

module.exports = router;
