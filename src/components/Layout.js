import React from 'react'
import styled from '@emotion/styled'
import SideNav from './SideNav'

const Wrapper = styled.div`
  width: 100vw;
`

export default () => {
  return (
    <Wrapper>
      <SideNav />
    </Wrapper>
  )
}
