import React from 'react'
import styled from '@emotion/styled'

import metadata from '../../hooks/get-site-metadata'
import postData from '../../hooks/get-post-data'

import Layout from '../../components/Layout'
import PostCardList from '../../components/PostCardList'
import PostCard from '../../components/PostCard'

const PageWrapper = styled.section`
  max-width: var(--body-max-width);
`

export default () => {
  const { title } = metadata()
  const { edges } = postData()

  return (
    <Layout title={title} >
      <PageWrapper>
        <PostCardList title="Latest Posts">
          {edges.map(({ node }) => (
            <PostCard
              id={node.id}
              slug={node.fields.slug}
              img={node.frontmatter.image}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
            />
          ))}
        </PostCardList>
      </PageWrapper>
    </Layout>
  )
}
