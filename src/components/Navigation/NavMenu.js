import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import PhoneNumber from './PhoneNumber'

import media from '../../utils/media'

const StyledList = styled.ul`
  list-style:none;
  margin:0;
  padding:0;
  text-align:center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  ${media.tablet`
    display: none;
  `}
  li {
    padding: 0 20px;
    color: ${props => props.theme.baseFontColor};
    font-size: 16px;
    font-weight: 500;
    display: inline;
    &:last-child(){
      float: right;
    }
    ${media.tablet`
      width: 100%;
      float: left;
      line-height: 50px;
    `}
  }
`
const NavPhoneNumber = styled(PhoneNumber)`
  float: right;
  display: block;
  ${media.tablet`
    display: none;
  `}
`

const NavMenu = props => (
  <>
    <NavPhoneNumber phoneNumber={props.phoneNumber} />
    <StyledList>
      <li><Link to='/products/'>Наши работы</Link></li>
      <li><Link to='/about/'>О нас</Link></li>
      <li><Link to='/contact/'>Контакты</Link></li>
    </StyledList>
  </>
)

export default NavMenu
