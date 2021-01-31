import React from 'react'
import styled from '@emotion/styled'
import metadata from '../../hooks/get-site-metadata'


const Copyright = styled.p`
  font-size: 0.55em;
`

export default () => {
  const { copyright } = metadata()
  return (
    <Copyright>
      Copyright &#169; {copyright.year} ]|[ {copyright.author}
    </Copyright>
  )
}
