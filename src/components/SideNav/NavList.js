import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const NavList = styled.ul`
  list-style: none;
  text-align: left;
  margin: 0;
  padding-left: 0;
  padding-bottom: 1em;
`

const NavItem = styled.li`
  font-family: var(--font-family-alt);
  color: var(--foreground);
  transition: all 0.2s;
  margin: 0;
  padding: 1em 0 1em 1em;

  &:hover {
    color: var(--accent);
    text-decoration: var(--underline-thin) var(--highlight);
    border-left: var(--border-thick) var(--background);
  }
`

export const NavListItem = ({ slug, key, name }) => {
  return (
    <Link to={slug}>
      <NavItem key={key}>{name}</NavItem>
    </Link>
  )
}
