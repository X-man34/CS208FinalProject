const express = require('express');

const router = express.Router();

const ORDER_URL = 'https://example.com/order-online';

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

const placeholderComments = [
  {
    name: 'Morning Regular',
    date: 'April 18, 2026',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Weekend Walker',
    date: 'April 11, 2026',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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

router.get('/comments', function (req, res) {
  const notice = req.query.notice === 'preview'
    ? 'Comments are not saved yet.'
    : '';

  renderPage(res, 'comments', {
    title: 'Customer Comments',
    pageTitle: 'Customer Comments | Downtown Donuts',
    currentPath: '/comments',
    notice,
    comments: placeholderComments
  });
});

router.post('/comments', function (req, res) {
  res.redirect('/comments?notice=preview');
});

module.exports = router;
