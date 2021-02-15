import React from 'react'
import styled from '@emotion/styled'

const PostCard = styled.div`
  width: 100%;
  margin: 0 auto;
  border-radius: var(--radius-soft);
  background: var(--background-fade);
  box-shadow: var(--shadow-main) var(--background-dark);
`

export default ({ children }) => {
  return (
    <PostCard>{children}</PostCard>
  )
}
