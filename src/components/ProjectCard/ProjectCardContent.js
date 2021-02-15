import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  height: 8rem;
  margin-bottom: 2rem;
  overflow: hidden;
`

const ProjectCardContent = styled.h5`
  font-family: var(--font-family-alt);
  color: var(--contrast);
`

export default ({ content }) => {
  return (
    <Wrapper>
      <ProjectCardContent>{content}</ProjectCardContent>
    </Wrapper>
  )
}
