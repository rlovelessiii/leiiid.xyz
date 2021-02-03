import React from 'react'
import styled from '@emotion/styled'

const ArticleImage = styled.img`
  width: 100%;
  margin: 0;
  padding: 0;
`

export default ({ src }) => {
  return (
    <ArticleImage src={src} />
  )
}
