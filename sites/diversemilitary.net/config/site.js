const navigation = require('./navigation');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const gam = require('./gam');
const omeda = require('./omeda');
const newsletter = require('./newsletter');
const search = require('./search');

module.exports = {
  navigation,
  nativeX,
  omeda,
  identityX,
  gam,
  newsletter,
  search,
  company: 'Cox Matthews and Associates, Inc',
  p1events: {
    tenant: 'diverse',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.diversemilitary.net' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.diversemilitary.net/files/base/diverse/all/image/static/dm-logo.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.diversemilitary.net/files/base/diverse/all/image/static/dm-logo.png?h=120&auto=format,compress&q=70 2x',
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
  gcse: {
    id: '8382d9da638933d1e',
  },
  gtm: {
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
