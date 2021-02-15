import React from 'react'
import styled from '@emotion/styled'

import postData from '../hooks/get-post-data'

import Layout from '../components/Layout'
import CardList from '../components/CardList'
import PostCard from '../components/PostCard'

const pageTitle = 'Leiiid by Example'

const PageWrapper = styled.section`
  max-width: var(--body-max-width);
  padding: 0 2rem;
`

export default () => {
  const { edges } = postData()

  return (
    <Layout title={pageTitle} >
      <PageWrapper>
        <CardList title="Latest Posts">
          {edges.map(({ node }) => (
            <PostCard
              id={node.id}
              slug={node.fields.slug}
              img={node.frontmatter.image}
              heading={node.frontmatter.title}
              date={node.frontmatter.date}
            />
          ))}
        </CardList>
      </PageWrapper>
    </Layout>
  )
}
