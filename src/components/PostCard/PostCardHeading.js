import React from 'react'
import styled from '@emotion/styled'

const PostCardHeading = styled.h3`
  color: var(--foreground);
  margin: 0;
  padding: 0.5em 0.75em 0 0.75em;
`

export default ({ content }) => {
  return <PostCardHeading>{content}</PostCardHeading>
}
