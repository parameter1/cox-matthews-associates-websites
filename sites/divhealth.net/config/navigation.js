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
  { href: 'https://www.ccnewsnow.com', label: 'Community Colleges', target: '_blank' },
  { href: 'https://www.diverseeducation.com', label: 'Education', target: '_blank' },
  { href: 'https://www.divhealth.net', label: 'Health', target: '_blank' },
  { href: 'https://diversejobs.net', label: 'Jobs', target: '_blank' },
  { href: 'https://www.diversemilitary.net', label: 'Military', target: '_blank' },
];

const utilities = [
  { href: 'https://mediakit.diverseeducation.com/', label: 'Advertise', target: '_blank' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: 'https://responses.diverseeducation.com/DiverseHealth', label: 'Subscribe', target: '_blank' },
];

const mobileMenu = {
  primary: [
    ...topics,
  ],
  secondary: [
    { href: 'https://responses.diverseeducation.com/DiverseHealth', label: 'Subscribe', target: '_blank' },
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
    leftColumn: {
      items: [
        ...topics,
      ],
    },
    midColumn: {
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
