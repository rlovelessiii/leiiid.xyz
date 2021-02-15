import React from 'react'
import styled from '@emotion/styled'

const PostCardListHeading = styled.h1`
  padding-left: 1em;
  text-shadow: 1px 5px 5px var(--background-dark);
`

export default ({ content }) => {
  return (
    <PostCardListHeading>{content}</PostCardListHeading>
  )
}
