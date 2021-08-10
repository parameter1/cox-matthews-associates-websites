const topics = [
  { href: '/student-issues', label: 'Student Issues' },
  { href: '/faculty-staff-issues', label: 'Faculty & Staff Issues' },
  { href: '/leadership-policy', label: 'Leadership & Policy' },
  { href: '/sports', label: 'Sports' },
  { href: '/demographics', label: 'Demographics' },
  { href: '/institutions', label: 'Institutions' },
  // { href: '/best-practices', label: 'Best Practices' },
];

const resources = [
  { href: 'https://www.ccnewsnow.com', label: 'Community Colleges' },
  { href: '/military', label: 'Military' },
  { href: '/health', label: 'Health' },
  // { href: '/sponsored-content', label: 'Sponsored Content' },
  // { href: '/latest-news', label: 'Latest News' },
  { href: '/opinion', label: 'Opinion' },
  { href: '/reports-data', label: 'Reports & Data' },
  // { href: '/from-the-magazine', label: 'From the Magazine' },
  { href: 'https://diversejobs.net', label: 'Jobs', target: '_blank' },
];

const utilities = [
  { href: '/page/advertise', label: 'Advertise' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: 'https://responses.diverseeducation.com/DiverseDaily', label: 'Newsletters', target: '_blank' },
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
      { href: '/student-issues', label: 'Student Issues' },
      { href: '/faculty-staff-issues', label: 'Faculty & Staff Issues' },
      { href: '/leadership-policy', label: 'Leadership & Policy' },
      { href: '/sports', label: 'Sports' },
      // { href: '/best-practices', label: 'Best Practices' },
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
