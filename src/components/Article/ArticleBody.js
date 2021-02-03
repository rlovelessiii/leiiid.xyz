import React from 'react'
import styled from '@emotion/styled'

const ArticleBody = styled.article`
  padding: 2rem;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  
  a {
    color: var(--foreground-dark);
    text-decoration: underline;
    &:hover {
      color: var(--accent);
      text-decoration: underline var(--highlight);
    }
  }
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
`

export default ({ html }) => {
  return <ArticleBody dangerouslySetInnerHTML={{ __html: html }} />
}
