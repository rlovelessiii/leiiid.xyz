import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Article from '../components/Article'

const PageWrapper = styled.div`
  max-width: var(--body-max-width);
  width: 100%;
`

export default ({ data }) => {
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const author = post.frontmatter.author
  const date = post.frontmatter.date
  const image = post.frontmatter.image
  const html = post.html

  return (
    <Layout title={title}>
      <PageWrapper>
        <Article title={title} author={author} date={date} image={image} html={html} />
      </PageWrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        image
      }
    }
  }
`
