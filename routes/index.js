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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.',
    accent: 'Buttery glaze, warm spice, and a soft maple finish.'
  },
  {
    title: 'Vanilla Cloud',
    tag: 'Coffee Pairing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.',
    accent: 'Built to sit beside a slow morning latte and easy conversation.'
  },
  {
    title: 'Cinnamon Window',
    tag: 'Fresh Favorite',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.',
    accent: 'A lighter, brighter profile for the front case and weekend rush.'
  }
];

const menuSections = [
  {
    title: 'Donuts',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
    items: [
      { name: 'Classic Glazed', detail: 'Lorem ipsum dolor sit amet consectetur.' },
      { name: 'Berry Sprinkle', detail: 'Lorem ipsum dolor sit amet consectetur.' },
      { name: 'Espresso Twist', detail: 'Lorem ipsum dolor sit amet consectetur.' }
    ]
  },
  {
    title: 'Coffee',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
    items: [
      { name: 'House Roast', detail: 'Lorem ipsum dolor sit amet consectetur.' },
      { name: 'Honey Latte', detail: 'Lorem ipsum dolor sit amet consectetur.' },
      { name: 'Cold Brew', detail: 'Lorem ipsum dolor sit amet consectetur.' }
    ]
  },
  {
    title: 'Featured',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
    items: [
      { name: 'Weekend Box', detail: 'Lorem ipsum dolor sit amet consectetur.' },
      { name: 'Downtown Dozen', detail: 'Lorem ipsum dolor sit amet consectetur.' },
      { name: 'Office Coffee Run', detail: 'Lorem ipsum dolor sit amet consectetur.' }
    ]
  }
];

const storyMilestones = [
  {
    year: '1992',
    title: 'Neighborhood Roots',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.'
  },
  {
    year: '2008',
    title: 'Morning Ritual',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.'
  },
  {
    year: 'Today',
    title: 'Fresh Chapter',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.'
  }
];

const values = [
  {
    title: 'Warm Service',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.'
  },
  {
    title: 'Fresh Batches',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.'
  },
  {
    title: 'Community Table',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.'
  }
];

const placeholderComments = [
  {
    name: 'Morning Regular',
    date: 'April 18, 2026',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.'
  },
  {
    name: 'Weekend Walker',
    date: 'April 11, 2026',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis.'
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
    ? 'Comment posting is in preview mode during Phase 1. Your message was not saved yet.'
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
