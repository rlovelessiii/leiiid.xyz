import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const { site } = useStaticQuery(
    graphql`
      query siteMetadata {
        site {
          siteMetadata {
            title
            description
            siteUrl
            copyright {
              author
              year
            }
          }
        }
      } 
    `
  )
  return site.siteMetadata
}
