import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import PostCard from './PostCard'
import PostCardImage from './PostCardImage'
import PostCardHeading from './PostCardHeading'
import PostCardSubHeading from './PostCardSubHeading'

const Wrapper = styled.div`
  margin: 1em auto;
  width: 33%;
  min-width: 300px;
`

export default ({ id, slug, img, title, date }) => {
  return (
    <Wrapper>
      <Link to={slug}>
        <PostCard key={id}>
          <PostCardImage src={img} />
          <PostCardHeading content={title} />
          <PostCardSubHeading content={date} />
        </PostCard>
      </Link>
    </Wrapper>
  )
}
