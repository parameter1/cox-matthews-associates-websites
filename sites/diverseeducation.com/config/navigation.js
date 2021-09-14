const subscribe = require('./subscribe');

const topics = [
  { href: '/students', label: 'Students' },
  { href: '/faculty-staff', label: 'Faculty & Staff' },
  { href: '/leadership-policy', label: 'Leadership & Policy' },
  { href: '/sports', label: 'Sports' },
  { href: '/demographics', label: 'Demographics' },
  { href: '/institutions', label: 'Institutions' },
  // { href: '/best-practices', label: 'Best Practices' },
];

const resources = [
  // { href: '/sponsored-content', label: 'Sponsored Content' },
  // { href: '/latest-news', label: 'Latest News' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/opinion', label: 'Opinion' },
  // { href: '/reports-data', label: 'Reports & Data' },
  // { href: '/from-the-magazine', label: 'From the Magazine' },
  { href: 'https://www.ccnewsnow.com', label: 'Community Colleges', target: '_blank' },
  { href: 'https://www.divhealth.net', label: 'Health', target: '_blank' },
  { href: 'https://diversejobs.net', label: 'Jobs', target: '_blank' },
  { href: 'https://www.diversemilitary.net', label: 'Military', target: '_blank' },
  // { href: 'https://keepitreal.diverseeducation.com/site/', label: 'Keep it Real', target: '_blank' },
];

const awards = [
  { href: '/awards-honors/arthur-ashe', label: 'Arthur Ashe' },
  { href: '/awards-honors/diverse-champions', label: 'Diverse Champions' },
  { href: 'http://response.diverseeducation.com/DOIT2020', label: 'DOIT', target: '_blank' },
  { href: '/awards-honors/emerging-scholars/2021', label: 'Emerging Scholars' },
  { href: '/awards-honors/mppwcc', label: 'Most Promising Places to Work: Community Colleges' },
  { href: '/awards-honors/mppwsa', label: 'Most Promising Places to Work: Student Affairs' },
  { href: 'https://top100.diverseeducation.com', label: 'Top 100', target: '_blank' },
];

const utilities = [
  { href: 'https://mediakit.diverseeducation.com/', label: 'Advertise', target: '_blank' },
  { href: '/page/contact-us', label: 'Contact Us' },
  subscribe,
];

const mobileMenu = {
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
      title: 'Subscribe to Diverse Education',
      callToAction: 'Subscribe',
      link: subscribe.href,
    },
  ],
  desktopMenu,
  mobileMenu,
  topics,
  primary: {
    items: [
      ...topics,
      { href: '/podcasts', label: 'Podcasts' },
      { href: '/opinion', label: 'Opinion' },
    ],
  },
  secondary: {
    items: [
      { href: '/students', label: 'Students' },
      { href: '/faculty-staff', label: 'Faculty & Staff' },
      { href: '/leadership-policy', label: 'Leadership & Policy' },
      { href: '/sports', label: 'Sports' },
      // { href: '/best-practices', label: 'Best Practices' },
    ],
  },
  tertiary: {
    items: [],
  },
  toggleMenu: {
    about: {
      label: 'About',
      items: utilities,
    },
    leftColumn: {
      label: 'Topics',
      items: [
        ...topics,
      ],
    },
    midColumn: {
      items: [
        ...resources,
      ],
    },
    rightColumn: {
      label: 'Awards & Honors',
      items: [
        ...awards,
      ],
    },
  },
  footer: {
    items: [
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
