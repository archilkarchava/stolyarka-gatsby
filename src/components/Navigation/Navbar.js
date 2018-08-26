import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import NavLogo from './Logo'
import NavMenu from './NavMenu'
import MobileNavMenu from './MobileNavMenu'
import MenuButton from './MenuButton'
import NavOverlay from './NavOverlay'

import media from '../../utils/media'
import setTextColor from '../../utils/setTextColor'

const Indent = styled.div`
  width: 100%;
  padding-top: ${props => props.theme.navHeight};
  ${media.tablet`
    padding-top: ${props => props.theme.mobileNavHeight};
  `};
`

const Wrapper = styled.nav`
  background-color: ${props => props.theme.primary};
  color: ${props => setTextColor(props.theme.primary)};
  z-index: 900;
  width: 100%;
  display: table;
  content: '';
  position: fixed;
  top: 0;
  height: ${props => props.theme.navHeight};
  ${media.tablet`
    height: ${props => props.theme.mobileNavHeight};
  `};
`
const Nav = styled.div`
  z-index: 9999;
  height: 100%;
  line-height: ${props => props.theme.navHeight};
  margin: 0 30px;
  ${media.tablet`
    height: ${props => props.theme.mobileNavHeight};
    line-height: ${props => props.theme.mobileNavHeight};
    margin: 0 20px;
  `};
`

class Navbar extends React.Component {
  state = {
    mobileMenuOpen: false,
  }
  mobileNavClickHandler = () => {
    this.setState(
      prevState => {
        return { mobileMenuOpen: !prevState.mobileMenuOpen }
      },
      () => {}
    )
  }
  overlayClickHandler = () => {
    this.setState({ mobileMenuOpen: false }, () => {})
  }
  render() {
    return (
      <>
        <Helmet
          htmlAttributes={{
            class: this.state.mobileMenuOpen && `noscroll-mobile`,
          }}
        />
        <Wrapper {...this.props.theme} className="clearfix">
          <Nav>
            <NavLogo to="/" title={this.props.title} />
            <MenuButton
              click={this.mobileNavClickHandler}
              show={this.state.mobileMenuOpen}
            />
            <NavMenu phoneNumber={this.props.phoneNumber} />
          </Nav>
        </Wrapper>
        <MobileNavMenu
          phoneNumber={this.props.phoneNumber}
          show={this.state.mobileMenuOpen}
        />
        <NavOverlay
          click={this.overlayClickHandler}
          show={this.state.mobileMenuOpen}
        />
        <Indent />
      </>
    )
  }
}

export default Navbar
