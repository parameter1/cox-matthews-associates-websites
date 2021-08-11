const topics = [
  { href: '/academics', label: 'Academics' },
  { href: '/campus', label: 'Campus' },
  { href: '/policy', label: 'Policy' },
  { href: '/from-the-pentagon', label: 'From the Pentagon' },
  { href: '/online-education', label: 'Online Education' },
  { href: '/funding', label: 'Funding' },
  { href: '/veterans', label: 'Veterans' },
];

const resources = [
  { href: '/other-news', label: 'Other News' },
  { href: '/blogs-opinion', label: 'Blogs/Opinion' },
  { href: 'https://keepitreal.diverseeducation.com/site/', label: 'Keep it Real', target: '_blank' },
];

const utilities = [
  // { href: '/page/advertise', label: 'Advertise' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: 'https://responses.diverseeducation.com/DiverseMilitary', label: 'Newsletters', target: '_blank' },
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
      { href: '/academics', label: 'Academics' },
      { href: '/campus', label: 'Campus' },
      { href: '/policy', label: 'Policy' },
      { href: '/funding', label: 'Funding' },
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
      { href: 'https://keepitreal.diverseeducation.com/site/', label: 'Keep it Real', target: '_blank' },
    ],
    topics: topics.primary,
    more: utilities,
  },
};
