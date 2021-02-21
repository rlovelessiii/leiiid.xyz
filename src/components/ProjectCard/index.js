import React from 'react'
import { FaStar, BiGitRepoForked } from 'react-icons/all'
import {
  ProjectCard,
  ProjectCardImage,
  ProjectCardHeading,
  ProjectCardDescription,
  ProjectCardFooter,
  ProjectCardStat
} from './styles'

export default ({ slug, img, heading, description, footer }) => {
  return (
    <a href={slug} target="_blank" rel="noreferrer noopener">
      <ProjectCard>
        <ProjectCardImage src={img} />
        <ProjectCardHeading>{heading}</ProjectCardHeading>
        <ProjectCardDescription><h5>{description}</h5></ProjectCardDescription>
        <ProjectCardFooter>
          <ProjectCardStat>
            <FaStar />
            <span>{footer.stargazers}</span>
          </ProjectCardStat>
          <ProjectCardStat>
            <BiGitRepoForked />
            <span>{footer.forkCount}</span>
          </ProjectCardStat>
          <ProjectCardStat>
            {footer.languages.nodes.map(({ id, name }) => (
              <span key={id}>{name}</span>
            ))}
          </ProjectCardStat>
        </ProjectCardFooter>
      </ProjectCard>
    </a>
  )
}
