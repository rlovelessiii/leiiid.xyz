import React from 'react'
import styled from '@emotion/styled'
import Head from './Head'
import SideNav from './SideNav'
import Footer from './Footer'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const BodyWrapper = styled.div`
  max-width: var(--body-max-width);
  margin: 0 auto;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
`


export default ({ title, children }) => {
  return (
    <>
      <Head title={title} />
      <Wrapper>
        <SideNav />
        <BodyWrapper>
          <Main>{children}</Main>
          <Footer />
        </BodyWrapper>
      </Wrapper>
    </>
  )
}
