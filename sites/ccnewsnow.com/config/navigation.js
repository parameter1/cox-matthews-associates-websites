const subscribe = require('./subscribe');

const topics = [
  { href: '/workforce-development', label: 'Workforce Development' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/academics', label: 'Academics' },
  { href: '/faculty', label: 'Faculty' },
  { href: '/finance', label: 'Finance' },
];

const resources = [
  { href: '/other-news', label: 'Other News' },
  { href: '/blogs-opinion', label: 'Blogs/Opinion' },
  { href: 'https://www.diverseeducation.com', label: 'Diverse', target: '_blank' },
  { href: 'https://www.divhealth.net', label: 'Health', target: '_blank' },
  { href: 'https://jobs.ccjobsnow.com', label: 'Jobs', target: '_blank' },
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
  primary: [
    ...topics,
    { href: 'https://jobs.ccjobsnow.com', label: 'CC Jobs', target: '_blank' },
  ],
  secondary: [
    ...resources,
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
  user: [],
  promos: [
    {
      title: subscribe.label,
      callToAction: subscribe.label,
      link: subscribe.href,
    },
    {
      title: 'Post A Job',
      callToAction: 'Post A Job',
      link: 'https://hiring.ccjobsnow.com/purchase/welcome-choose-plan/packages',
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
    items: topics,
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
