const navigation = require('./navigation');
const leaders = require('./leaders');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const gam = require('./gam');

module.exports = {
  leaders,
  navigation,
  nativeX,
  identityX,
  gam,
  company: 'Cox Matthews and Associates, Inc',
  p1events: {
    tenant: 'diverse',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.diverseeducation.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.diverseeducation.com/files/base/diverse/all/image/static/de-logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.diverseeducation.com/files/base/diverse/all/image/static/de-logo.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.diverseeducation.com/files/base/diverse/all/image/static/de-logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.diverseeducation.com/files/base/diverse/all/image/static/de-logo.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/DiverseIssuesInHigherEducation/' },
    { provider: 'twitter', href: 'https://twitter.com/DiverseIssues' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/diverse-issues-in-higher-education/' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'NOT_SET',
  },
  gcse: {
    id: 'NOT_SET',
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
