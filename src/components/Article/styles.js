import styled from '@emotion/styled'

export const Article = styled.div`
  background: var(--foreground-light);
  color: var(--foreground-dark);
  box-shadow: var(--shadow-main) var(--background-dark);
  a {
    text-decoration: underline;
  }
  a:hover {
    color: var(--accent);
    text-decoration-color: var(--highlight);
  }
`

export const ArticleImageContainer = styled.div`
  position: relative;
  &:hover > h6 {
    opacity: 100%;
  }
`

export const ArticleImage = styled.img`
  width: 100%;
  margin-bottom: 0;
  padding: 0;
`

export const ArticleImageSource = styled.h6`
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0.5rem 0;
  background: var(--background-fade);
  color: var(--foreground);
  font-style: italic;
  text-align: center;
  transition: all 0.5s ease;
  opacity: 0;
  
  a {
    font-weight: bold;
  }
`

export const ArticleHeading = styled.div`
  position: relative;
  margin-top: -0.3rem;
  padding: 2rem;
  background: var(--background-fade);
  border-bottom: var(--border-thick) var(--accent);
`

export const ArticleTitle = styled.h1`
  margin-top: 0;
  color: var(--foreground-light);
  text-shadow: 1px 5px 5px var(--background-dark);
`

export const ArticleAuthor = styled.h4`
  font-family: var(--font-family-alt);
  font-weight: normal;
  color: var(--foreground);
  text-shadow: 1px 5px 5px var(--background-dark);
`

export const ArticleDate = styled.h5`
  font-family: var(--font-family-alt);
  font-weight: normal;
  color: var(--foreground-alt);
  text-shadow: 1px 5px 5px var(--background-dark);
`

export const ArticleContainer = styled.div`
  width: 100%;
`

export const ArticleBody = styled.article`
  padding: 2rem;
  max-width: 680px;
  margin: 0 auto;
  
  hr {
    border: 1px solid var(--foreground-alt);
  }
  h1,h2,h3,h4 {
    border-top: 1px solid var(--foreground-alt);
  }
  h1,h2,h3,h4 {
    text-shadow: 0 2px 2px var(--contrast);
  }
  h5,h6 {
    text-transform: uppercase;
    text-shadow: 0 1px 2px var(--contrast);
  }
  h6 {
    color: var(--secondary);
  }
  blockquote {
    background: var(--foreground);
    border-left: var(--border-thick) var(--accent);
    box-shadow: 1px 5px 5px var(--contrast);
  }
  img {
    width: 100%;
  }
`

export const ArticleFooter = styled.div`
  height: 2rem;
  display: block;
  background: var(--background-fade);
  border-top: var(--border-thick) var(--accent);
`
