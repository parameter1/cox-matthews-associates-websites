const navigation = require('./navigation');
const leaders = require('./leaders');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const gam = require('./gam');
const newsletter = require('./newsletter');
const search = require('./search');

module.exports = {
  leaders,
  navigation,
  nativeX,
  identityX,
  idxNavItems: {
    enable: true,
  },
  gam,
  newsletter,
  search,
  company: 'Cox Matthews and Associates, Inc',
  p1events: {
    tenant: 'diverse',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.diverseeducation.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.diverseeducation.com/files/base/diverse/all/image/static/de-logo.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.diverseeducation.com/files/base/diverse/all/image/static/de-logo.png?h=120&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.diverseeducation.com/files/base/diverse/all/image/static/de-logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.diverseeducation.com/files/base/diverse/all/image/static/de-logo.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
  },
  podcastLinks: [
    { label: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/in-the-margins/id1540117090' },
    { label: 'Google Podcasts', href: 'https://podcasts.google.com/feed/aHR0cHM6Ly9kaXZlcnNlZWR1Y2F0aW9uLmxpYnN5bi5jb20vcnNz?sa=X&ved=0CCcQ27cFahcKEwiwvpORs8HtAhUAAAAAHQAAAAAQBA' },
    { label: 'RadioPublic', href: 'https://radiopublic.com/in-the-margins-WkLmqX' },
    { label: 'Spotify', href: 'https://open.spotify.com/show/6FSDlxj88XFUgOsfeftBfP' },
    { label: 'Stitcher', href: 'https://www.stitcher.com/show/in-the-margins' },
  ],
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/DiverseIssuesInHigherEducation/' },
    { provider: 'twitter', href: 'https://twitter.com/DiverseIssues' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/diverse-issues-in-higher-education/' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCXVYpTBoF5lP0FYAz2-ebcQ' },
    { provider: 'instagram', href: 'https://www.instagram.com/diverseissuesinhighereducation/' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-TSQTRVN',
  },
  wufoo: {
    userName: 'NOT_SET',
  },
  newsletters: {
    subscribeLink: '',
  },
  magazines: {
    description: '',
  },
};
