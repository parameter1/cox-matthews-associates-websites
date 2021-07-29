const gql = require('graphql-tag');

module.exports = gql`
fragment WebsiteDiverseChampionPromotionFragment on Content {
  id
  type
  shortName
  body
  siteContext {
    path
  }
}

`;
