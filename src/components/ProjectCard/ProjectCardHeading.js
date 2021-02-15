import React from 'react'
import styled from '@emotion/styled'

const ProjectCardHeading = styled.h3`
  margin: 0;
  padding: 0;
  color: var(--foreground);
  text-shadow: 1px 2px 2px var(--background-dark);
`

export default ({ content }) => {
  return <ProjectCardHeading>{content}</ProjectCardHeading>
}
