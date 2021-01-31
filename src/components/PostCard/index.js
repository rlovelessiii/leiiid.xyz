import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import PostCardImage from './PostCardImage'
import PostCardHeading from './PostCardHeading'
import PostCardSubHeading from './PostCardSubHeading'

const Card = styled.div`
  margin: 0.5em auto;  
  width: 30%;
  border-radius: var(--radius-soft);
  background: linear-gradient(180deg, var(--primary) 50%, var(--secondary) 100%);
  box-shadow: 1px 5px 5px var(--background-dark);
`

export default ({ id, slug, img, title, date }) => {
  return (
    <Link to={slug}>
      <Card key={id}>
        <PostCardImage src={img} />
        <PostCardHeading content={title} />
        <PostCardSubHeading content={date} />
      </Card>
    </Link>
  )
}
