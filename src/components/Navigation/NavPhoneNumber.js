import React from 'react'
import styled from 'styled-components'

import media from '../../utils/media'

const StyledLink = styled.a`
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

const NavPhoneNumber = props => (
  <StyledLink href={`tel:${props.phoneNumber}`}>
    {props.phoneNumber}
  </StyledLink>
)


export default NavPhoneNumber
