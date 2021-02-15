import React from 'react'
import styled from '@emotion/styled'

const ProjectCardImage = styled.img`
  width: 100%;
  border-top-left-radius: var(--radius-hard);
  border-top-right-radius: var(--radius-hard);
`

export default ({ src }) => {
  return <ProjectCardImage src={src}/>
}
