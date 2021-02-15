import React from 'react'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import CardList from '../components/CardList'
import ProjectCard from '../components/ProjectCard'

import featuredRepos from '../hooks/get-featured-repos'
import latestRepos from '../hooks/get-latest-repos'

const PageWrapper = styled.section`
  max-width: var(--body-max-width);
  padding: 0 2rem;
`

export default () => {
  const { featured } = featuredRepos()
  const { latest } = latestRepos()

  return (
    <>
      <Layout title="Projects">
        <PageWrapper>
          <CardList title="Featured">
            {featured.map(({ node }) => (
              <ProjectCard
                id={node.id}
                slug={node.url}
                heading={node.name}
                content={node.description}
                footer={
                  {
                    stargazers: node.stargazers.totalCount,
                    forkCount: node.forkCount,
                    languages: node.languages
                  }
                }
              />
            ))}
          </CardList>
          <CardList title="Recently Updated">
            {latest.map(({ node }) => (
              <ProjectCard
                id={node.id}
                slug={node.url}
                heading={node.name}
                content={node.description}
                footer={
                  {
                    stargazers: node.stargazers.totalCount,
                    forkCount: node.forkCount,
                    languages: node.languages
                  }
                }
              />
            ))}
          </CardList>
        </PageWrapper>
      </Layout>
    </>
  )
}
