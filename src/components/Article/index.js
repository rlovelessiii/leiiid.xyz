import React from 'react'
import {
  Article,
  ArticleImageContainer,
  ArticleImage,
  ArticleImageSource,
  ArticleHeading,
  ArticleTitle,
  ArticleAuthor,
  ArticleDate,
  ArticleContainer,
  ArticleBody,
  ArticleFooter,
} from './styles'

export default ({ title, author, date, img, imgSrc, imgSrcUrl, imgCred, imgGPS, html }) => {
  return (
    <Article>
      <ArticleImageContainer>
        <ArticleImage src={img}/>
        <ArticleImageSource>
          Source: <a href={imgSrcUrl} target="_blank" rel="noreferrer noopener">{imgSrc}</a>
          &nbsp; | &nbsp;
          Credit: {imgCred}
          &nbsp; | &nbsp;
          Location: {imgGPS}
        </ArticleImageSource>
      </ArticleImageContainer>
      <ArticleHeading>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleAuthor>author: {author}</ArticleAuthor>
        <ArticleDate>published: {date}</ArticleDate>
      </ArticleHeading>
      <ArticleContainer>
        <ArticleBody dangerouslySetInnerHTML={{ __html: html }} />
      </ArticleContainer>
      <ArticleFooter />
    </Article>
  )
}
