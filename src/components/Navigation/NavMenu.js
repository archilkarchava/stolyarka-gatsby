import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import NavPhoneNumber from './NavPhoneNumber'

import media from '../../utils/media'

const StyledList = styled.ul`
  list-style:none;
  margin:0;
  padding:0;
  text-align:center;
  margin: 0 auto;
  ${media.tablet`
    display: none;
  `}
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
