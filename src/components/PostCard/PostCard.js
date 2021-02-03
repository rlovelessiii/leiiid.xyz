import React from 'react'
import styled from '@emotion/styled'

const PostCard = styled.div`
  width: 90%;
  margin: 0 auto;
  border-radius: var(--radius-soft);
  background: linear-gradient(180deg, var(--primary) 50%, var(--secondary) 100%);
  box-shadow: 1px 5px 5px var(--background-dark);
`

export default ({ children }) => {
  return (
    <PostCard>{children}</PostCard>
  )
}
