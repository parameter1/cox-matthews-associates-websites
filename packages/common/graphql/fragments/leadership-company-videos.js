const gql = require('graphql-tag');

const leadersAlias = process.env.LEADERS_ALIAS || 'leaders-2021';

module.exports = gql`

fragment LeadershipCompanyVideosFragment on Content {
  id
  name
  siteContext {
    path
  }
  ... on ContentCompany {
    isLeader: hasWebsiteSchedule(input: { sectionAlias: "${leadersAlias}" })
    youtube {
      url
    }
    videos: youtubeVideos(input: { pagination: { limit: 3 } }) {
      edges {
        node {
          id
          url
          title
          published
          thumbnail(input: { size: high })
        }
      }
    }
  }
}

`;
