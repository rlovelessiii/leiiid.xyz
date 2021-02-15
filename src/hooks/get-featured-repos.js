import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const {
    github: {
      viewer: {
        pinnedItems: { edges },
      }
    }
  } = useStaticQuery(
    graphql`
      query featured {
        github {
          viewer {
            pinnedItems(first: 3) {
              edges {
                node {
                  ... on GitHub_Repository {
                    id
                    name
                    url
                    description
                    stargazers {
                      totalCount
                    }
                    forkCount
                    languages(first: 4) {
                      nodes {
                        id
                        name
                      }
                    }
                    openGraphImageUrl
                    createdAt
                    updatedAt
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return { featured: edges }
}
