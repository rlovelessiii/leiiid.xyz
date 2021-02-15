import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query postData {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                author
                date(formatString: "MMMM DD, YYYY")
                image
              }
              fields {
                slug
              }
            }
          }
        }
      } 
    `
  )
  return allMarkdownRemark
}
