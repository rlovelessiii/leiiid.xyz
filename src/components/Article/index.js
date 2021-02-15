import React from 'react'
import styled from '@emotion/styled'

import ArticleImage from './ArticleImage'
import ArticleHeading from './ArticleHeading'
import ArticleBody from './ArticleBody'
import { ArticleFooter } from './ArticleFooter'

const ArticleWrapper = styled.div`
  background: var(--foreground-light);
  color: var(--foreground-dark);
  box-shadow: var(--shadow-main) var(--background-dark);
`

export default ({ title, author, date, image, html }) => {
  return (
    <ArticleWrapper>
      {image !== null && <ArticleImage src={image} />}
      <ArticleHeading title={title} author={author} date={date} />
      <ArticleBody html={html} />
      <ArticleFooter />
    </ArticleWrapper>
  )
}
