import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import SocialLinks from '../SocialLinks'
import NavPhoneNumber from './NavPhoneNumber'

import media from '../../utils/media'

const StyledList = styled.ul`
  width: 100%;
  background-color: ${props => props.theme.primary};
  padding-top: ${props => props.theme.mobileNavHeight};
  list-style: none;
  margin:0;
  padding:0;
  text-align:center;
  margin: 0 auto;
  z-index: 100;
  position: fixed;
  overflow: hidden;
  li {
    line-height: 50px;
    &:last-child {

    }
  }
  ${media.desktop`
  `}
`

const MobileNavMenu = props => (
  <StyledList>
    <li><Link to='/products/'>Наши работы</Link></li>
    <li><Link to='/about/'>О нас</Link></li>
    <li><Link to='/contact/'>Контакты</Link></li>
    <li><NavPhoneNumber phoneNumber={props.phoneNumber} /></li>
    <li><SocialLinks /></li>
  </StyledList>
)

export default MobileNavMenu
