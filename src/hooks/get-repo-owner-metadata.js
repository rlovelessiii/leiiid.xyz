import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const {
    github: {
      viewer: {
        isHireable,
        location,
        name,
        url,
        twitterUsername
      }
    }
  } = useStaticQuery(
    graphql`
      query ownerMetadata {
        github {
          viewer {
            isHireable
            location
            name
            url
            twitterUsername
          }
        }
      }
    `
  )
  return { isHireable, location, name, url, twitterUsername }
}
