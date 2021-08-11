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
  { href: 'https://www.ccnewsnow.com', label: 'Community Colleges', target: '_blank' },
  { href: 'https://www.diversemilitary.net', label: 'Military', target: '_blank' },
  { href: 'https://www.diverseeducation.com', label: 'Education', target: '_blank' },
  { href: 'https://diversejobs.net', label: 'Jobs', target: '_blank' },
];

const utilities = [
  // { href: '/page/advertise', label: 'Advertise' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: 'https://responses.diverseeducation.com/DiverseHealth', label: 'Newsletters', target: '_blank' },
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
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: topics.primary,
    more: utilities,
  },
};
