import React from 'react'
import styled from '@emotion/styled'
import { BsThreeDotsVertical } from 'react-icons/all'

const PositionWrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 195px;
  z-index: -1;
`

const Button = styled.button`
  border: none;
  height: 2em;
  width: 1.75em;
  cursor: pointer;
  border-top-right-radius: var(--radius-hard);
  border-bottom-right-radius: var(--radius-hard);
  background: linear-gradient(90deg, var(--primary) 35%, var(--contrast) 100%);
  box-shadow: 0 0 10px var(--background-dark);
  
  &:hover {
    background: linear-gradient(90deg, var(--primary) 35%, var(--accent) 100%);
  }
  
  .icon {
    color: var(--highlight);
    height: 100%;
    width: 100%;
    margin-left: 3px;
  }
  
  /*
  Hide button when screen is on desktops, show when on smaller devices
   */
  display: none;
  @media (max-width: 1140px) {
    display: inline;
  }
`

export default (props) => {
  return (
    <PositionWrapper>
      <Button onClick={props.onClick}>
        <BsThreeDotsVertical className="icon" />
      </Button>
    </PositionWrapper>
  )
}
