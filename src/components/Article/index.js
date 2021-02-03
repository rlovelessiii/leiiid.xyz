import React from 'react'
import styled from '@emotion/styled'

import ArticleImage from './ArticleImage'
import ArticleHeading from './ArticleHeading'
import ArticleBody from './ArticleBody'

const ArticleWrapper = styled.div`
  background: var(--foreground-light);
  color: var(--foreground-dark);
  box-shadow: 0 5px 10px var(--background-dark);
`

export default ({ title, author, date, image, html }) => {
  return (
    <ArticleWrapper>
      {image !== null && <ArticleImage src={image} />}
      <ArticleHeading title={title} author={author} date={date} />
      <ArticleBody html={html} />
    </ArticleWrapper>
  )
}
