import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import PostCardImage from './PostCardImage'
import PostCardHeading from './PostCardHeading'
import PostCardSubHeading from './PostCardSubHeading'

const Wrapper = styled.div`
  margin: 1em auto;
  width: 33%;
  min-width: 300px;
`

const Card = styled.div`
  width: 90%;
  margin: 0 auto;
  border-radius: var(--radius-soft);
  background: linear-gradient(180deg, var(--primary) 50%, var(--secondary) 100%);
  box-shadow: 1px 5px 5px var(--background-dark);
`

export default ({ id, slug, img, title, date }) => {
  return (
    <Wrapper>
      <Link to={slug}>
        <Card key={id}>
          <PostCardImage src={img} />
          <PostCardHeading content={title} />
          <PostCardSubHeading content={date} />
        </Card>
      </Link>
    </Wrapper>
  )
}
