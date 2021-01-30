import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const NavList = styled.ul`
  list-style: none;
  text-align: left;
  padding-left: 0;
  padding-bottom: 1em;
`

const NavItem = styled.li`
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

export const NavListItem = (props) => {
  return (
    <Link to={props.slug}>
      <NavItem key={props.key}>{props.name}</NavItem>
    </Link>
  )
}
