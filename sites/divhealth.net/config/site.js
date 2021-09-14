const navigation = require('./navigation');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const gam = require('./gam');
const newsletter = require('./newsletter');
const search = require('./search');

module.exports = {
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
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.divhealth.net' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.divhealth.net/files/base/diverse/all/image/static/dh-logo.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.divhealth.net/files/base/diverse/all/image/static/dh-logo.png?h=120&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.divhealth.net/files/base/diverse/all/image/static/dh-logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.divhealth.net/files/base/diverse/all/image/static/dh-logo.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/diverseissueshealth/', target: '_blank' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-NBNL9ZZ',
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
