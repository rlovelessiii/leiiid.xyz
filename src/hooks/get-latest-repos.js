import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      }
    }
  } = useStaticQuery(
    graphql`
      query latest {
        github {
          viewer {
            repositories(first: 6, orderBy: {field: PUSHED_AT, direction: DESC}, privacy: PUBLIC) {
              edges {
                node {
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
    `
  )
  return { latest: edges }
}
