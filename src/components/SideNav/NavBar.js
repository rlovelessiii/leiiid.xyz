import React from 'react'
import styled from '@emotion/styled'
import './styles.css'

const NavWrapper = styled.header`
  font-size: 20px;
  width: 200px;
  height: 100vh;
  z-index: 999;
`

export const NavBar = styled.nav`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, var(--primary) 50%, var(--secondary) 100%);
  border-right: var(--border-thin) var(--contrast);
  overflow: auto;
`

export default (props) => {
  return (
    <NavWrapper className={props.clicked ? 'nav clicked' : 'nav'}>
      <NavBar>{props.children}</NavBar>
    </NavWrapper>
  )
}
