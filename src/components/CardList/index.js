import React from 'react'
import styled from '@emotion/styled'

import CardListHeading from './CardListHeading'

const CardList = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 8fr;
  gap: 2.4rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

export default ({ title, children }) => {
  return (
    <>
      <CardListHeading content={title} />
      <CardList>{children}</CardList>
    </>
  )
}
