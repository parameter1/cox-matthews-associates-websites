const topics = [
  { href: '/campus-issues', label: 'Campus Issues' },
  { href: '/disparities', label: 'Disparities' },
  { href: '/nursing', label: 'Nursing' },
  { href: '/research', label: 'Research' },
  { href: '/mental-health', label: 'Mental Health' },
  { href: '/faculty', label: 'Faculty' },
  { href: '/technology', label: 'Technology' },
  { href: '/covid-19', label: 'COVID-19' },
];

const resources = [
  { href: '/other-news', label: 'Other News' },
  { href: '/blogs-opinion', label: 'Blogs/Opinion' },
  { href: '/resources/top-100-health-medical-categories', label: 'Top 100-Health & Medical Categories' },
];

const utilities = [
  { href: '/page/advertise', label: 'Advertise' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: '/newsletters', label: 'Newsletters' },
];

const mobileMenu = {
  primary: [
    ...topics,
  ],
  secondary: [
    { href: '/newsletters', label: 'Newsletters' },
  ],
};

const desktopMenu = {
  about: [...utilities],
  sections: [
    ...topics,
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
    items: [
      { href: '/campus-issues', label: 'Campus Issues' },
      { href: '/disparities', label: 'Disparities' },
      { href: '/nursing', label: 'Nursing' },
      { href: '/research', label: 'Research' },
      { href: '/mental-health', label: 'Mental Health' },
    ],
  },
  tertiary: {
    items: [],
  },
  toggleMenu: {
    midColumn: {
      items: [
        ...topics,
      ],
    },
    rightColumn: {
      items: [
        ...resources,
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
