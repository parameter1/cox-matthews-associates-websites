const configureIdentityX = require('@cox-matthews-associates/package-global/config/identity-x');
const formDefault = require('@cox-matthews-associates/package-global/config/identity-x/default');

module.exports = configureIdentityX({
  appId: '60b7b2bd1245f46d03e69e1d',
  appContextId: '64b0214c2eedcdc3b57281c7',
  requiredClientFields: [
    'givenName',
    'familyName',
    'organization',
    'organizationTitle', // @todo make this a custom field somehow
    'regionCode', // Only require client-side for non-us/ca
    'countryCode',
    'postalCode', // Only require client-side for non-us/ca
  ],
  activeCustomFieldIds: [
    '64b6b916b0c3f170bfcd26c6', // Divers Health Daily
  ],
  forms: {
    default: formDefault,
  },
});
