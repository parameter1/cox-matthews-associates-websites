const configureIdentityX = require('@cox-matthews-associates/package-global/config/identity-x');
const formDefault = require('@cox-matthews-associates/package-global/config/identity-x/default');

// append custom demos row of questions to the end of general questions
// formDefault.fieldRows.push(
//   [
//     // Demo: PF: Job Function
//     {
//       label: 'Job Function',
//       id: '6434009be5f1a5a77760fd37',
//       type: 'custom-select',
//       required: true,
//       width: 0.5,
//     },
//     // Demo: FG: Primary Business
//     {
//       label: 'Primary Business',
//       id: '643401767694b72e949334d8',
//       type: 'custom-select',
//       required: true,
//       width: 0.5,
//     },
//   ],
// );

module.exports = configureIdentityX({
  appContextId: '64b019497ab161d050758dbf',
  requiredClientFields: [
    'givenName',
    'familyName',
    'organization',
    'organizationTitle', // @todo make this a custom field somehow
    'regionCode', // Only require client-side for non-us/ca
    'countryCode',
    'postalCode', // Only require client-side for non-us/ca
    // '6434009be5f1a5a77760fd37',
    // '643401767694b72e949334d8',
  ],
  activeCustomFieldIds: [
    // '6434009be5f1a5a77760fd37', // Job Function
    // '643401767694b72e949334d8', // Primary Business
    // '64418e4b6ffc39b88fcf0ed9', // ENL: Petfood Industry News
    // '64418e624a7ef9ce3f814153', // ENL: Trending Topics Weekly
  ],
  forms: {
    default: formDefault,
  },
});
