import React from 'react'
import styled from '@emotion/styled'

const ArticleHeadingWrapper = styled.div`
  margin-top: -1rem;
  padding: 2rem;
  background: linear-gradient(180deg, var(--primary) 0%, var(--secondary) 100%);  
  border-bottom: var(--border-thick) var(--accent);
`

const Title = styled.h1`
  color: var(--foreground-light);
  text-shadow: 1px 5px 5px var(--background-dark);
`

const Author = styled.h4`
  font-family: var(--font-family-alt);
  font-weight: normal;
  color: var(--foreground);
  text-shadow: 1px 5px 5px var(--background-dark);
`

const Date = styled.h5`
  font-family: var(--font-family-alt);
  font-weight: normal;
  color: var(--foreground-alt);
  text-shadow: 1px 5px 5px var(--background-dark);
`

export default ({ title, author, date }) => {
  return (
    <ArticleHeadingWrapper>
      <Title className="h0">{title}</Title>
      <Author>author: {author}</Author>
      <Date>published: {date}</Date>
    </ArticleHeadingWrapper>
  )
}
