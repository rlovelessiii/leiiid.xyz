import React from 'react'
import styled from '@emotion/styled'

const PostCardImage = styled.img`
  width: 100%;
  border-top-left-radius: var(--radius-soft);
  border-top-right-radius: var(--radius-soft);
`

export default ({ src }) => {
  return <PostCardImage src={src} />
}
