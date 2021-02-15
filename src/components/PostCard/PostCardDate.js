import React from 'react'
import styled from '@emotion/styled'

const PostCardDate = styled.h5`
  font-family: var(--font-family-alt);
  margin: 0;
  padding: 0.5em 1.5em 1em 1.5em;
  color: var(--contrast);
`

export default ({ content }) => {
  return <PostCardDate>{content}</PostCardDate>
}
