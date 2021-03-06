const gql = require('graphql-tag');

module.exports = gql`
fragment WebsiteArthurAsherofileFragment on Content {
  id
  shortName
  teaser(input: { useFallback: false, maxLength: null })
  siteContext {
    path
  },
  primaryImage {
    id
    src(input: { options: { auto: "format,compress", q: 70 } })
    alt
    isLogo
  }
  ...on SidebarEnabledInterface {
    profiles: sidebarStubs(input:{labels: ["Scholar Profile"]}) {
      name
      body
    }
  }
}

`;
