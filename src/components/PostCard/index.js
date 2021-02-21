import React from 'react'
import { Link } from 'gatsby'

import {
  PostCard,
  PostCardImage,
  PostCardHeading,
  PostCardDate,
  PostCardDescription,
  PostCardFooter,
} from './styles'

export default ({ id, slug, img, heading, date, description, tags }) => {
  return (
  <Link to={slug}>
    <PostCard key={id}>
      {img && <PostCardImage src={img} />}
      {heading && <PostCardHeading>{heading}</PostCardHeading>}
      {date && <PostCardDate>{date}</PostCardDate>}
      {description && <PostCardDescription><h5>{description}</h5></PostCardDescription>}
      {tags &&
      <PostCardFooter>
        {tags.map(tag => (
          <span>{tag}</span>
        ))}
      </PostCardFooter>
      }
    </PostCard>
  </Link>
)
}
