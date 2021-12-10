const subscribe = require('./subscribe');

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
  { href: 'https://www.diverseeducation.com', label: 'Diverse', target: '_blank' },
  { href: 'https://www.divhealth.net', label: 'Health', target: '_blank' },
  { href: 'https://diversejobs.net', label: 'Jobs', target: '_blank' },
  { href: 'https://www.diversemilitary.net', label: 'Military', target: '_blank' },
  // { href: 'https://keepitreal.diverseeducation.com/site/', label: 'Keep it Real', target: '_blank' },
];

const utilities = [
  { href: 'https://mediakit.diverseeducation.com/', label: 'Advertise', target: '_blank' },
  { href: '/page/about-us', label: 'About Us' },
  { href: '/page/contact-us', label: 'Contact Us' },
  subscribe,
];

const mobileMenu = {
  type: 'navbar2',
  promos: [
    {
      title: 'Subscribe to Diverse Education',
      callToAction: 'Subscribe',
      link: subscribe.href,
    },
  ],
  primary: [
    ...topics,
  ],
  secondary: [
    subscribe,
    { href: 'https://mediakit.diverseeducation.com/', label: 'Advertise', target: '_blank' },
  ],
};

const desktopMenu = {
  about: [...utilities],
  sections: [
    ...topics,
  ],
};

module.exports = {
  type: 'navbar2',
  promos: [
    {
      title: subscribe.label,
      callToAction: subscribe.label,
      link: subscribe.href,
    },
  ],
  desktopMenu,
  mobileMenu,
  topics,
  primary: {
    items: [
      ...topics,
    ],
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
    about: {
      items: utilities,
    },
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
      { href: 'https://keepitreal.diverseeducation.com/site/', label: 'Keep it Real', target: '_blank' },
    ],
    topics: topics.primary,
    more: utilities,
  },
};
