const topics = [
  { href: '/african-american', label: 'African-American' },
  { href: '/asian-american-pacific-islander', label: 'Asian American Pacific Islander' },
  { href: '/campus-climate', label: 'Campus Climate' },
  { href: '/covid-19', label: 'COVID-19' },
  { href: '/disabilities', label: 'Disabilities' },
];

module.exports = {
  primary: {
    items: topics,
  },
  secondary: {
    items: [
    ],
  },
  tertiary: {
    items: [
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      { href: '/site-map', label: 'Site Map' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: topics,
    },
    {
      label: 'Resources',
      items: [
      ],
    },
    {
      label: 'User Tools',
      items: [
      ],
    },
  ],
};
