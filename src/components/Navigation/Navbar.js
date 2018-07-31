import React, { Component } from 'react'
import styled from 'styled-components'

import NavLogo from './NavLogo'
import NavMenu from './NavMenu'
import MobileNavMenu from './MobileNavMenu'
import MenuButton from './MenuButton'
import Overlay from './Overlay'

import media from '../../utils/media'

const Indent = styled.div`
  padding-top: ${props => props.theme.navHeight};
  ${media.tablet`
    padding-top: ${props => props.theme.mobileNavHeight};
  `}
`

const Wrapper = styled.nav`
  z-index: 20;
  background-color: ${props => props.theme.primary};
  width: 100%;
  display: table;
  position: fixed;
  top: 0;
  background: white;
`
const Nav = styled.div`
  height: ${props => props.theme.navHeight};
  line-height: ${props => props.theme.navHeight};
  margin: 0 20px;
  ${media.tablet`
    height: ${props => props.theme.mobileNavHeight};
    line-height: ${props => props.theme.mobileNavHeight};
    margin: 0 10px;
  `}
`

class Navbar extends Component {
  state = {
    mobileMenuOpen: false
  }
  mobileNavClickHandler = () => {
    this.setState((prevState) => {
      return { mobileMenuOpen: !prevState.mobileMenuOpen }
    })
  }
  render() {
    let mobileNavMenu
    let overlay
    if (this.state.mobileMenuOpen) {
      mobileNavMenu = <MobileNavMenu phoneNumber={this.props.phoneNumber} />
      overlay = <Overlay />
    }
    return (
      <>
        {overlay}
        <Wrapper>
          <Nav className='clearfix'>
            <NavLogo to='/' title={this.props.title} />
            <MenuButton click={this.mobileNavClickHandler} />
            <NavMenu phoneNumber={this.props.phoneNumber} />
          </Nav>
          {mobileNavMenu}
        </Wrapper>
        <Indent />
      </>
    )
  }
}

export default Navbar
