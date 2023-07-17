const navigation = require('./navigation');
const leaders = require('./leaders');
const nativeX = require('./native-x');
const gam = require('./gam');
const omeda = require('./omeda');
const identityX = require('./identity-x');
const omedaIdentityX = require('./omeda-identity-x');
const identityXOptInHooks = require('./identity-x-opt-in-hooks');
const magazine = require('./magazine');
const newsletter = require('./newsletter');
const search = require('./search');
const contactUs = require('./contact-us');
const contentMeter = require('./content-meter');

module.exports = {
  leaders,
  contentMeter,
  navigation,
  nativeX,
  omeda,
  identityX,
  idxNavItems: {
    enable: process.env.IDX_NAV_ENABLE === 'true',
  },
  omedaIdentityX,
  identityXOptInHooks,
  gam,
  magazine,
  newsletter,
  search,
  contactUs,
  company: 'Cox Matthews and Associates, Inc',
  p1events: {
    tenant: 'diverse',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.diverseeducation.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.diverseeducation.com/files/base/diverse/all/image/static/diverse-education-logo.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.diverseeducation.com/files/base/diverse/all/image/static/diverse-education-logo.png?h=60&auto=format,compress&q=70&dpr=2 2x',
      ],
    },
    footer: {
      src: 'https://img.diverseeducation.com/files/base/diverse/all/image/static/diverse-education-logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.diverseeducation.com/files/base/diverse/all/image/static/diverse-education-logo.png?h=45&auto=format,compress&q=70&dpr=2 2x',
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
  gcse: {
    id: '79253cc8ec9d83184',
  },
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-TSQTRVN',
  },
  wufoo: {
    userName: 'diverseeducation',
    podcastFormHash: 'zf36w2c0p0xbsh',
  },
  newsletters: {
    subscribeLink: '',
  },
  magazines: {
    description: '',
  },
};
