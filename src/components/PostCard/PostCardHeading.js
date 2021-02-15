import React from 'react'
import styled from '@emotion/styled'

const PostCardHeading = styled.h3`
  color: var(--foreground);
  margin: 0;
  padding: 0.5rem 1rem;
  text-shadow: 1px 2px 2px var(--background-dark);
`

export default ({ content }) => {
  return <PostCardHeading>{content}</PostCardHeading>
}
