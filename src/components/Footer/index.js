import React from 'react'
import styled from '@emotion/styled'
import Copyright from './Copyright'

const Footer = styled.footer`
  margin: 1em;
  padding: 1em;
`

export default () => {
  return (
    <Footer>
      <Copyright />
    </Footer>
  )
}
