import React, { Component } from 'react'
import styled from 'styled-components'

import NavLogo from './Logo'
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
  z-index: 9999;
  background-color: ${props => props.theme.primary};
  width: 100%;
  display: table;
  content: "";
  position: fixed;
  top: 0;
  height: ${props => props.theme.navHeight};
  ${media.tablet`
    height: ${props => props.theme.mobileNavHeight};
  `}
`
const Nav = styled.div`
  z-index: 9999;
  height: 100%;
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
    }, () => this.props.menuOpened(this.state.mobileMenuOpen))
  }
  overlayClickHandler = () => {
    this.setState({ mobileMenuOpen: false }, () => this.props.menuOpened(this.state.mobileMenuOpen))
  }
  render() {
    return (
      <>
        <Wrapper className='clearfix'>
          <Nav>
            <NavLogo to='/' title={this.props.title} />
            <MenuButton click={this.mobileNavClickHandler} />
            <NavMenu phoneNumber={this.props.phoneNumber} />
          </Nav>
        </Wrapper>
        <MobileNavMenu phoneNumber={this.props.phoneNumber} show={this.state.mobileMenuOpen} />
        <Overlay click={this.overlayClickHandler} show={this.state.mobileMenuOpen} />
        <Indent />
      </>
    )
  }
}

export default Navbar
