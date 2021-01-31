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

const Body = styled.body`
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
`

export default ({ title, children }) => {
  return (
    <>
      <Head title={title} />
      <Wrapper>
        <SideNav />
        <BodyWrapper>
          <Body>
            <Main>{children}</Main>
            <Footer />
          </Body>
        </BodyWrapper>
      </Wrapper>
    </>
  )
}
