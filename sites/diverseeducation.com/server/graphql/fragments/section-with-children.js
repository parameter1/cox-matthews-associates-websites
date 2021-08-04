const gql = require('graphql-tag');

module.exports = gql`
fragment WebsiteSectionWithChilderenFragment on WebsiteSection {
  id
  alias
  name
  children(input: { pagination: { limit: 0 }, sort: { field: sequence, order: asc } }) {
    edges {
      node {
        id
        alias
        name
        children(input: { pagination: { limit: 0 }, sort: { field: sequence, order: asc } }) {
          edges {
            node {
              id
              alias
              name
              children(input: { pagination: { limit: 0 }, sort: { field: sequence, order: asc } }) {
                edges {
                  node {
                    id
                    alias
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

`;
