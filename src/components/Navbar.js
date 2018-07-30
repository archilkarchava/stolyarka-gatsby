import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import media from '../utils/media'

const Indent = styled.div`
  padding-top: ${props => props.theme.navHeight};
  ${media.tablet`
    padding-top: ${props => props.theme.mobileNavHeight};
  `}
`

const Wrapper = styled.nav`
  width: 100%;
  display: table;
  position: fixed;
  top: 0;
  z-index: 10;
  background: white;
`
const Nav = styled.div`
  height: ${props => props.theme.navHeight};
  line-height: ${props => props.theme.navHeight};
  width: 95%;
  margin: 0 auto;
  ${media.tablet`
    height: ${props => props.theme.mobileNavHeight};
    line-height: ${props => props.theme.mobileNavHeight};
  `}
  .menu {
    list-style:none;
    margin:0;
    padding:0;
    text-align:center;
    margin: 0 auto;
    ${media.tablet`
      display: none;
    `}
  }
  li {
    padding: 0 20px;
    color: black;
    font-size: 16px;
    font-weight: 500;
    display: inline;
    ${media.tablet`

      width: 100%;
      float: left;
      line-height: 50px;
    `}
  }
`

const NavLogo = styled(Link)`
  font-size: 36px;
  font-weight: 400;
  float: left;
  text-transform: lowercase;
`

const NavTel = styled.a`
  float: right;
  font-size: 18px;
  font-weight: 700;
  ${media.tablet`
    display: none;
    margin: 40px 0 10px 0;
    width: 100%;
    float: left;
  `}
`

const MenuButton = styled.label`
  display: none;
  float: right;
  cursor: pointer;
  position: relative;
  width: 23px;
  height: 16px;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  top: 50%;
  ${media.tablet`
    display: inline-block;
  `}
`

const Hamburger = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  span {
    width: 100%;
    height: 3px;
    background-color: black;
    border-radius: 25px;
    display: block;
    position: absolute;
  }
  .line:nth-child(1) {
    top 0;
  }
  .line:nth-child(2) {
    top 8px;
  }
  .line:nth-child(3) {
    top 8px;
  }
  .line:nth-child(4) {
    top 16px;
  }
`

const Toggle = styled.input`
  display: none;
  &[type="checkbox"]:checked + ${MenuButton} + .menu {
    display: block;
  }
  &[type="checkbox"]:checked + ${MenuButton} div .line:nth-child(1){
    opacity: 0;
    transition: .2s ease-in-out;
    -webkit-transition: .2s ease-in-out;
    -moz-transition: .2s ease-in-out;
    -o-transition: .2s ease-in-out;
  }
  &[type="checkbox"]:checked + ${MenuButton} div .line:nth-child(2){
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transition: .3s ease-in-out;
    -webkit-transition: .3s ease-in-out;
    -moz-transition: .3s ease-in-out;
    -o-transition: .3s ease-in-out;
  }
  &[type="checkbox"]:checked + ${MenuButton} div .line:nth-child(3){
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transition: .3s ease-in-out;
    -webkit-transition: .3s ease-in-out;
    -moz-transition: .3s ease-in-out;
    -o-transition: .3s ease-in-out;
  }
  &[type="checkbox"]:checked + ${MenuButton} div .line:nth-child(4){
    opacity: 0;
    transition: .2s ease-in-out;
    -webkit-transition: .2s ease-in-out;
    -moz-transition: .2s ease-in-out;
    -o-transition: .2s ease-in-out;
  }
  &[type="checkbox"]:not(:checked) + ${MenuButton} div .line:nth-child(1){
    opacity: 1;
    transition: .2s ease-in-out;
    -webkit-transition: .2s ease-in-out;
    -moz-transition: .2s ease-in-out;
    -o-transition: .2s ease-in-out;
  }
  &[type="checkbox"]:not(:checked) + ${MenuButton} div .line:nth-child(2){
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transition: .3s ease-in-out;
    -webkit-transition: .3s ease-in-out;
    -moz-transition: .3s ease-in-out;
    -o-transition: .3s ease-in-out;
  }
  &[type="checkbox"]:not(:checked) + ${MenuButton} div .line:nth-child(3){
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transition: .3s ease-in-out;
    -webkit-transition: .3s ease-in-out;
    -moz-transition: .3s ease-in-out;
    -o-transition: .3s ease-in-out;
  }
  &[type="checkbox"]:not(:checked) + ${MenuButton} div .line:nth-child(4){
    opacity: 1;
    transition: .2s ease-in-out;
    -webkit-transition: .2s ease-in-out;
    -moz-transition: .2s ease-in-out;
    -o-transition: .2s ease-in-out;
  }

`

const Navbar = ({ title, phoneNumber }) => (
  <>
    <Wrapper>
      <Nav className="clearfix">
        <NavLogo to="/"><s>{title}</s></NavLogo>
        <NavTel href={`tel:${phoneNumber}`}>{phoneNumber}</NavTel>
        <Toggle type="checkbox" id="toggle" />
        <MenuButton htmlFor="toggle">
          <Hamburger>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </Hamburger>
        </MenuButton>
        <ul className="menu">
          <li><Link to="/products/">Наши работы</Link></li>
          <li><Link to="/about/">О нас</Link></li>
          <li><Link to="/contact/">Контакты</Link></li>
        </ul>
      </Nav>
    </Wrapper>
    <Indent />
  </>
)


export default Navbar
