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
  { href: '/podcasts?utm_source=website&utm_medium=landing-page&utm_term=podcasts', label: 'Podcasts' },
  { href: '/opinion', label: 'Opinion' },
  { href: '/webinars', label: 'Webcasts' },
  // { href: '/reports-data', label: 'Reports & Data' },
  // { href: '/from-the-magazine', label: 'From the Magazine' },
  { href: 'https://www.ccnewsnow.com', label: 'Community Colleges', target: '_blank' },
  { href: '/health', label: 'Health' },
  { href: 'https://jobs.theeduledger.com/?utm_source=website&utm_medium=job-board&utm_term=diverse-jobs', label: 'Jobs', target: '_blank' },
  { href: '/military', label: 'Military' },
  { href: 'https://keepitreal.theeduledger.com/', label: 'Keep it Real', target: '_blank' },
  { href: 'https://shop.theeduledger.com/', label: 'Shop', target: '_blank' },
  { href: 'https://testimonials.theeduledger.com/index.html?utm_source=website&utm_medium=landing-page&utm_term=testimonials', label: 'Testimonials', target: '_blank' },
];

const awards = [
  { href: '/awards-honors/arthur-ashe', label: 'Arthur Ashe Jr.' },
  { href: '/awards-honors/diverse-champions', label: 'Champions Awards' },
  { href: '/awards-honors/dr-john-hope-franklin', label: 'Dr. John Hope Franklin Award' },
  { href: '/awards-honors/emerging-scholars/2025', label: 'Emerging Scholars' },
  { href: '/awards-honors/graduate-scholars/2024', label: 'Rising Graduate Scholars' },
  { href: '/awards-honors/mppwcc?utm_source=website&utm_medium=landing-page&utm_term=Most-Promising-Places-to-Work-in-Community-Colleges', label: 'Most Promising Places to Work: Community Colleges' },
  { href: '/awards-honors/mppwsa?utm_source=website&utm_medium=landing-page&utm_term=Most-Promising-Places-to-Work-in-Student-Affairs', label: 'Most Promising Places to Work: Student Affairs' },
  { href: 'https://top100.theeduledger.com/?utm_source=website&utm_medium=landing-page&utm_term=top100', label: 'Top 100', target: '_blank' },
  { href: '/awards-honors/top-women/2025', label: 'Top Women' },
];

const utilities = [
  { href: 'https://mediakit.theeduledger.com/?utm_source=website&utm_medium=mediakit', label: 'Advertise', target: '_blank' },
  { href: '/press-releases', label: 'Press Releases' },
  { href: '/page/about-us?utm_source=website&utm_medium=page&utm_term=about-us', label: 'About Us' },
  { href: '/page/contact-us?utm_source=website&utm_medium=page&utm_term=cont', label: 'Contact Us' },
  subscribe,
  { href: 'https://editorial-calendar.theeduledger.com/?utm_source=website&utm_medium=landing-page&utm_term=editorial-calendar', label: 'Editorial Calendar', target: '_blank' },
];

const mobileMenu = {
  primary: [
    ...topics,
    ...awards,
  ],
  secondary: [
    ...resources,
    subscribe,
    { href: 'https://mediakit.theeduledger.com/?utm_source=website&utm_medium=mediakit', label: 'Advertise', target: '_blank' },
    { href: '/press-releases', label: 'Press Releases' },
    { href: 'https://editorial-calendar.theeduledger.com', label: 'Editorial Calendar', target: '_blank' },
    { href: '/page/about-us?utm_source=website&utm_medium=page&utm_term=about-us', label: 'About Us', target: '_blank' },
    { href: '/page/contact-us?utm_source=website&utm_medium=page&utm_term=contact-us', label: 'Contact Us', target: '_blank' },
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
  user: [],
  topics,
  primary: {
    items: [
      { href: '/students', label: 'Students' },
      { href: '/faculty-staff', label: 'Faculty & Staff' },
      { href: '/leadership-policy', label: 'Leadership & Policy' },
      { href: '/podcasts?utm_source=website&utm_medium=landing-page&utm_term=podcasts', label: 'Podcasts' },
      { href: 'https://top100.theeduledger.com/?utm_source=website&utm_medium=landing-page&utm_term=top100', label: 'Top 100', target: '_blank' },
      { href: 'https://mediakit.theeduledger.com/', label: 'Advertise', target: '_blank' },
      { href: 'https://jobs.theeduledger.com/?utm_source=website&utm_medium=job-board&utm_term=diverse-jobs', label: 'Jobs', target: '_blank' },
      { href: 'https://shop.theeduledger.com', label: 'Shop', target: '_blank' },
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
