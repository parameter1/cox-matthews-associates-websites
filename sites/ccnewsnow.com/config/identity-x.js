const configureIdentityX = require('@cox-matthews-associates/package-global/config/identity-x');
const formDefault = require('@cox-matthews-associates/package-global/config/identity-x/default');

module.exports = configureIdentityX({
  appContextId: '64b0213c178ace3a82da4149',
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
    '64b6b813d786a6a00a33f347', // CCNews Now Daily
  ],
  forms: {
    default: formDefault,
  },
});
