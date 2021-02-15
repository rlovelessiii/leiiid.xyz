import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import PostCard from './PostCard'
import PostCardImage from './PostCardImage'
import PostCardHeading from './PostCardHeading'
import PostCardDate from './PostCardDate'

const Wrapper = styled.div`
  width: 100%;
`

export default ({ id, slug, img, heading, date }) => {
  return (
    <Wrapper>
      <Link to={slug}>
        <PostCard key={id}>
          {img && <PostCardImage src={img} />}
          {heading && <PostCardHeading content={heading} />}
          {date && <PostCardDate content={date} />}
        </PostCard>
      </Link>
    </Wrapper>
  )
}
