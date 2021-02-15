import React from 'react'
import styled from '@emotion/styled'

import ProjectCard from './ProjectCard'
import ProjectCardImage from './ProjectCardImage'
import ProjectCardHeading from './ProjectCardHeading'
import ProjectCardContent from './ProjectCardContent'
import ProjectCardFooter from './ProjectCardFooter'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-hard);
  background: var(--background-fade);
  box-shadow: var(--shadow-main) var(--background-dark);
`

export default ({ id, slug, img, heading, content, footer }) => {
  return (
    <Wrapper>
      <a href={slug} target="_blank" rel="noreferrer noopener">
        <ProjectCard key={id}>
          {img && <ProjectCardImage src={img} />}
          {heading && <ProjectCardHeading content={heading} />}
          {content && <ProjectCardContent content={content} />}
          {footer &&
          <ProjectCardFooter
            stargazers={footer.stargazers}
            forkCount={footer.forkCount}
            languages={footer.languages}
          />}
        </ProjectCard>
      </a>
    </Wrapper>
  )
}
