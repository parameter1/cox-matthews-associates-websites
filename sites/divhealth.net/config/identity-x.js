const configureIdentityX = require('@cox-matthews-associates/package-global/config/identity-x');
const formDefault = require('@cox-matthews-associates/package-global/config/identity-x/default');

module.exports = configureIdentityX({
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
