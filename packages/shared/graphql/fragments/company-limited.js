const gql = require('graphql-tag');
const contentListFragment = require('./content-list');

module.exports = gql`

fragment LimitedCompanyProfileFragment on Content {
  ...WebsiteContentListFragment

  name

  ... on ContentCompany {
    website
    phone
    tollfree
  }
}

${contentListFragment}

`;
