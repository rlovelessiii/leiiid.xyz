import React from 'react'
import styled from '@emotion/styled'

import PostCardListHeading from './PostCardListHeading'

const PostCardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export default ({ title, children }) => {
  return (
    <>
      <PostCardListHeading>{title}</PostCardListHeading>
      <PostCardList>{children}</PostCardList>
    </>
  )
}
