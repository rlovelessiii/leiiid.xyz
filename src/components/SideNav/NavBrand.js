import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Brand = styled.div`
  text-align: center;
`

const Text = styled.h1`
  font-weight: var(--font-weight-heavy);
  cursor: pointer;
  color: var(--contrast);
  text-decoration: var(--underline-thick) var(--highlight);
  
  &:hover {
    color: var(--accent);
  }
`

export const BrandLink = (props) => {
  return (
    <Link to={props.url}>
      <Brand>{props.children}</Brand>
    </Link>
  )
}

export const BrandText = (props) => {
  return (
    <Text>{props.children}</Text>
  )
}
