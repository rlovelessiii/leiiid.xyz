import React from 'react'
import styled from '@emotion/styled'

const PostCardHeading = styled.h3`
  color: var(--foreground);
`

export default ({ content }) => {
  return <PostCardHeading>{content}</PostCardHeading>
}
