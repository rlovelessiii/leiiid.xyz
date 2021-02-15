import React from 'react'
import styled from '@emotion/styled'

import { FaStar } from 'react-icons/all'
import { BiGitRepoForked } from 'react-icons/all'

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 0;
  margin: 0.4rem -0.5rem;
  color: var(--foreground);
`

const Stat = styled.div`
  padding: 0;
  font-size: 0.7rem;
  span {
    margin: 0 0.3rem;
  }
  &:last-of-type {
    font-size: 0.6rem;
    color: var(--background);
    position: absolute;
    right: 0;
    bottom: 0.2rem;
    padding-right: 0.75rem;
  }
`

export default ({ stargazers, forkCount, languages }) => {
  return (
    <Wrapper>
      <Stat>
        <FaStar/>
        <span>{stargazers}</span>
      </Stat>
      <Stat>
        <BiGitRepoForked/>
        <span>{forkCount}</span>
      </Stat>
      <Stat>
        {languages.nodes.map(({ id, name }) => (
          <span key={id}>{name}</span>
        ))}
      </Stat>
    </Wrapper>
  )
}
