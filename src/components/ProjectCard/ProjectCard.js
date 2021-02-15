import React from 'react'
import styled from '@emotion/styled'

const ProjectCard = styled.div`
  padding: 0.5rem 1rem;
`

export default ({ children }) => {
  return <ProjectCard>{children}</ProjectCard>
}
