import React from 'react'

import { BrandLink, BrandText } from './NavBrand'
import NavBar from './NavBar'
import { NavList, NavListItem } from './NavList'
import { NavMenu } from '../../config/SideNav/nav-menu'
import NavButton from './NavButton'


export default class extends React.Component {

  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <>
        <NavBar clicked={this.state.clicked}>
          <BrandLink url="/">
            <BrandText>Leiiid.xyz</BrandText>
          </BrandLink>
          <NavList>
            {NavMenu.map((item, index) => {
              return <NavListItem key={index} slug={item.slug} name={item.name} />
            })}
          </NavList>
          <NavButton onClick={this.handleClick} />
        </NavBar>
      </>
    )
  }

}
