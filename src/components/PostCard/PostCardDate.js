import React from 'react'
import styled from '@emotion/styled'

const PostCardDate = styled.h5`
  font-family: var(--font-family-alt);
  margin: 0;
  padding: 0.5rem 1rem;
  color: var(--contrast);
`

export default ({ content }) => {
  return <PostCardDate>{content}</PostCardDate>
}
