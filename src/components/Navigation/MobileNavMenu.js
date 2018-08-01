import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import SocialLinks from '../SocialLinks'
import PhoneNumber from './PhoneNumber'

import media from '../../utils/media'

const Wrapper = styled.div`
  z-index: 999;
  text-align: center;
  width: 100%;
  padding: 30px 0;
  margin: 0 auto;
  position: fixed;
  transition: transform .5s cubic-bezier(0,1,.5,1);
  transform: ${props => props.show ? 'translateY(0)' : `translateY(-100%)`};
  top: ${props => props.show ? props.theme.mobileNavHeight : '0'};
  background-color: ${props => props.theme.primary};
  display: none;
  ${media.tablet`
    display: block;
  `}
`

const StyledList = styled.ul`
  padding: 10px 0 90px 0;
  list-style: none;
  li {
    font-weight: 500;
    font-size: 20px;
  }
  li:not(:last-child) {
    margin-bottom: 50px;
  }
`

const MobileNavMenu = props => (
  <Wrapper show={props.show}>
    <StyledList>
      <li><Link to='/products/'>Наши работы</Link></li>
      <li><Link to='/about/'>О нас</Link></li>
      <li><Link to='/contact/'>Контакты</Link></li>
    </StyledList>
    <PhoneNumber size='24px' phoneNumber={props.phoneNumber} />
    <SocialLinks margin='35px 0 0 0' />
  </Wrapper>
)

export default MobileNavMenu
