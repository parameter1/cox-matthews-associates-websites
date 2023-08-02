const configureIdentityX = require('@cox-matthews-associates/package-global/config/identity-x');
const formDefault = require('@cox-matthews-associates/package-global/config/identity-x/default');

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
  ],
  activeCustomFieldIds: [
    '64b59e6ab0c3f1123ebfdf04', // Diverse Daily
    '64c03173d786a63621af8423', // Categories
  ],
  recommendedQuestionId: '64c03173d786a63621af8423',
  answerToQueryParamsMap: {
    // job fuction
    '64c03173d786a63621af8423': {
      // Students/Student Issues
      '64c032d61f6c74cbd9115ed7': {
        queryParams: {
          limit: 4,
          sectionId: 76092,
        },
      },
      // Faculty & Staff/Faculty & Staff Issues
      '64c032d61f6c744601115ed6': {
        queryParams: {
          limit: 4,
          sectionId: 76093,
        },
      },
      // Leadership & Policy
      '64c032d61f6c742a79115ed5': {
        queryParams: {
          limit: 4,
          sectionId: 76094,
        },
      },
      // Sports
      '64c032d61f6c7432a4115ed4': {
        queryParams: {
          limit: 4,
          sectionId: 76095,
        },
      },
      // African-Americans
      '64c032d61f6c7418c8115ed3': {
        queryParams: {
          limit: 4,
          sectionId: 76122,
        },
      },
      // Asian American Pacific Islander
      '64c032d61f6c74b3a6115ed2': {
        queryParams: {
          limit: 4,
          sectionId: 76123,
        },
      },
      // Disabilities
      '64c032d61f6c740959115ed1': {
        queryParams: {
          limit: 4,
          sectionId: 76124,
        },
      },
      // LGBTQ+
      '64c032d61f6c7454e9115ed0': {
        queryParams: {
          limit: 4,
          sectionId: 76126,
        },
      },
      // Latinx
      '64c032d61f6c745b03115ecf': {
        queryParams: {
          limit: 4,
          sectionId: 76125,
        },
      },
      // Native Americans
      '64c032d61f6c74524e115ece': {
        queryParams: {
          limit: 4,
          sectionId: 76127,
        },
      },
      // Women
      '64c032d61f6c746640115ecd': {
        queryParams: {
          limit: 4,
          sectionId: 76128,
        },
      },
      // General Institutions
      '64c032d61f6c740645115ecc': {
        queryParams: {
          limit: 4,
          sectionId: 76099,
        },
      },
      // Community Colleges
      '64c032d61f6c74d7c9115ecb': {
        queryParams: {
          limit: 4,
          sectionId: 76132,
        },
      },
      // HBCUs
      '64c032d61f6c7476c5115eca': {
        queryParams: {
          limit: 4,
          sectionId: 76129,
        },
      },
      // MSIs
      '64c032d61f6c743607115ec9': {
        queryParams: {
          limit: 4,
          sectionId: 76130,
        },
      },
      // Tribal Colleges
      '64c032d61f6c741859115ec8': {
        queryParams: {
          limit: 4,
          sectionId: 76131,
        },
      },
    },
  },
  forms: {
    default: formDefault,
  },
});
