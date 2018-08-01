import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import SocialLinks from '../SocialLinks'
import PhoneNumber from './PhoneNumber'

import media from '../../utils/media'

const StyledList = styled.ul`
  padding: 30px 0;
  width: 100%;
  background-color: ${props => props.theme.primary};
  list-style: none;
  margin:0;
  text-align:center;
  margin: 0 auto;
  z-index: 999;
  position: fixed;
  li:not(:last-child) {
    font-weight: 600;
    padding-bottom: 20px;
  }
  li:nth-last-child(2) {
    padding-top: 35px;
  }
  li:last-child {
    padding-bottom: 0;
  }
  transition: transform .5s cubic-bezier(0,1,.5,1);
  transform: ${props => props.show ? 'translateY(0)' : `translateY(-100%)`};
  top: ${props => props.show ? props.theme.mobileNavHeight : '0'};
  display: none;
  ${media.tablet`
    display: block;
  `}

`

const MobileNavMenu = props => (
  <StyledList show={props.show}>
    <li><Link to='/products/'>Наши работы</Link></li>
    <li><Link to='/about/'>О нас</Link></li>
    <li><Link to='/contact/'>Контакты</Link></li>
    <li><PhoneNumber phoneNumber={props.phoneNumber} /></li>
    <li><SocialLinks /></li>
  </StyledList>
)

export default MobileNavMenu
