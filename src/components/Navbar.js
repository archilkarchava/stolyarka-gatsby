import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  display: table;
  position: fixed;
  top: 0;
  z-index: 10;
  background: white;
`
const Nav = styled.div`
  height: 100px;
  line-height: 100px;
  width: 90%;
  margin: 0 auto;
  .menu {
    list-style:none;
    margin:0;
    padding:0;
    text-align:center;
    margin: 0 auto;
    @media screen and (max-width: 900px) {
      display: none;
    }
  }
  li {
    padding: 0 20px;
    color: black;
    font-size: 16px;
    font-weight: 500;
    display: inline;
    @media screen and (max-width: 900px) {
      width: 100%;
      float: left;
      line-height: 50px;
    }
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
  @media screen and (max-width: 900px) {
    margin: 40px 0 10px 0;
    width: 100%;
    float: left;
  }
`

const MenuButton = styled.label`
  display: none;
  float: right;
  cursor: pointer;
  position: relative;
  width: 28px;
  height: 20px;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  top: 50%;
  @media screen and (max-width: 900px) {
    display: inline-block;
  }
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
  }
  &[type="checkbox"]:checked + ${MenuButton} div .line:nth-child(2){
    transform: rotate(45deg);
    transition: .3s ease-in-out;
  }
  &[type="checkbox"]:checked + ${MenuButton} div .line:nth-child(3){
    transform: rotate(-45deg);
    transition: .3s ease-in-out;
  }
  &[type="checkbox"]:checked + ${MenuButton} div .line:nth-child(4){
    opacity: 0;
    transition: .2s ease-in-out;
  }
  &[type="checkbox"]:not(:checked) + ${MenuButton} div .line:nth-child(1){
    opacity: 1;
    transition: .2s ease-in-out;
  }
  &[type="checkbox"]:not(:checked) + ${MenuButton} div .line:nth-child(2){
    transform: rotate(0deg);
    transition: .3s ease-in-out;
  }
  &[type="checkbox"]:not(:checked) + ${MenuButton} div .line:nth-child(3){
    transform: rotate(0deg);
    transition: .3s ease-in-out;
  }
  &[type="checkbox"]:not(:checked) + ${MenuButton} div .line:nth-child(4){
    opacity: 1;
    transition: .2s ease-in-out;
  }

`


const Indent = styled.div`
  padding-top: 100px;
`

const Navbar = ({ title, phoneNumber }) => (
  <div>
    <Wrapper>
      <Nav className="clearfix">
        <NavLogo to="#"><s>{ title }</s></NavLogo>
        <Toggle type="checkbox" id="toggle"/>
        <MenuButton htmlFor="toggle">
          <Hamburger>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </Hamburger>
        </MenuButton>
        <ul className="menu">
          <li></li>
          <li><Link to="#work">Наши работы</Link></li>
          <li><Link to="#about">О нас</Link></li>
          <li><Link to="#contactUs">Контакты</Link></li>
          <li>
            <NavTel href={`tel:${ phoneNumber }`}>{ phoneNumber }</NavTel>
          </li>
        </ul>
      </Nav>
    </Wrapper>
    <Indent/>
  </div>
)


export default Navbar
