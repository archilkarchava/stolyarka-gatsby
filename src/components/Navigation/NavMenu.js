import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import PhoneNumber from './PhoneNumber'

import media from '../../utils/media'
import setTextColor from '../../utils/setTextColor'

const StyledList = styled.ul`
  background-color: ${props => props.theme.primary};
  &,
  a {
    color: ${props => setTextColor(props.theme.primary)};
  }
  list-style: none;
  padding: 0;
  text-align: center;
  margin: 0 auto;
  width: 365px;
  height: 100%;
  ${media.tablet`
    display: none;
  `} li {
    padding: 0 20px;
    font-size: 16px;
    font-weight: 500;
    display: inline-block;
    &:last-child() {
      float: right;
    }
    ${media.tablet`
      width: 100%;
      float: left;
      line-height: 50px;
    `};
  }
`
const NavPhoneNumber = styled(PhoneNumber)`
  float: right;
  display: block;
  ${media.tablet`
    display: none;
  `};
`

const NavMenu = props => (
  <>
    <NavPhoneNumber phoneNumber={props.phoneNumber} />
    <StyledList>
      <li>
        <Link to="/products/">Наши работы</Link>
      </li>
      <li>
        <Link to="/about/">О нас</Link>
      </li>
      <li>
        <Link to="/contact/">Контакты</Link>
      </li>
    </StyledList>
  </>
)

export default NavMenu
