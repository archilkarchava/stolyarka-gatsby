import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  font-size: 36px;
  font-weight: 400;
  float: left;
  text-transform: lowercase;
`

const NavLogo = props => (
  <StyledLink {...props}>
    <s>{props.title}</s>
  </StyledLink>
)


export default NavLogo