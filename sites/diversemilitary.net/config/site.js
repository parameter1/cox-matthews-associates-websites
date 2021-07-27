const navigation = require('./navigation');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const gam = require('./gam');

module.exports = {
  navigation,
  nativeX,
  identityX,
  gam,
  company: 'Cox Matthews and Associates, Inc',
  p1events: {
    tenant: 'diverse',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.diversemilitary.net' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.diversemilitary.net/files/base/diverse/all/image/static/dm-logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.diversemilitary.net/files/base/diverse/all/image/static/dm-logo.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.diversemilitary.net/files/base/diverse/all/image/static/dm-logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.diversemilitary.net/files/base/diverse/all/image/static/dm-logo.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [],
  gtm: {
  },
  gcse: {
    id: 'NOT_SET',
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-NJZK2JD',
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
