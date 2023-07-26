const configureIdentityX = require('@cox-matthews-associates/package-global/config/identity-x');
const formDefault = require('@cox-matthews-associates/package-global/config/identity-x/default');

module.exports = configureIdentityX({
  appId: '60b7b2bd1245f46d03e69e1d',
  appContextId: '64b019497ab161d050758dbf',
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
    '64b59e6ab0c3f1123ebfdf04', // Diverse Daily
    '64c03173d786a63621af8423', // Categories
  ],
  forms: {
    default: formDefault,
  },
});
