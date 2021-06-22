const topics = {
  primary: [
    { href: '/latest-news', label: 'News' },
    { href: '/opinion', label: 'Opinion' },
    { href: '/campus-climate', label: 'Campus Climate' },
    { href: '/international', label: 'International' },
    { href: '/disabilities', label: 'Disabilities' },
    { href: '/sports', label: 'Sports' },
  ],
  expanded: [
    { href: '/covid-19', label: 'COVID-19' },
  ],
  secondary: [],
};

const utilities = [
  { href: '/page/advertise', label: 'Advertise' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: '/newsletters', label: 'Newsletters' },
];

const mobileMenu = {
  primary: [
    ...topics.primary,
    ...topics.expanded,
  ],
  secondary: [
    ...topics.secondary,
    { href: '/newsletters', label: 'Newsletters' },
  ],
};

const desktopMenu = {
  about: [...utilities],
  sections: [
    ...topics.primary,
    ...topics.expanded,
    ...topics.secondary,
  ],
};

module.exports = {
  desktopMenu,
  mobileMenu,
  topics,
  primary: {
    items: [],
  },
  secondary: {
    items: topics.primary,
  },
  tertiary: {
    items: [],
  },
  toggleMenu: {
    midColumn: {
      items: [
        ...topics.primary,
        ...topics.expanded,
      ],
    },
    rightColumn: {
      items: [
        ...topics.secondary,
        ...utilities,
      ],
    },
  },
  footer: {
    items: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: topics.primary,
    more: utilities,
  },
};
