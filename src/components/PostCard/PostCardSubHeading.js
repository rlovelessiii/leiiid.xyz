import React from 'react'
import styled from '@emotion/styled'

const PostCardSubHeading = styled.h5`
  color: var(--contrast);
`

export default ({ content }) => {
  return <PostCardSubHeading>{content}</PostCardSubHeading>
}
