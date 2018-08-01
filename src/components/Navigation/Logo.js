import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  height: 100%;
  font-size: 36px;
  font-weight: 400;
  float: left;
  text-transform: lowercase;
`

const Logo = props => (
  <StyledLink {...props}>
    <s>{props.title}</s>
  </StyledLink>
)


export default Logo