import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import setTextColor from '../../utils/setTextColor'

const StyledLink = styled(Link)`
  text-decoration: line-through;
  height: 100%;
  font-size: 36px;
  font-weight: 400;
  float: left;
  text-transform: lowercase;
  &,
  a {
    color: ${props => setTextColor(props.theme.primary)};
  }
`

const Logo = props => <StyledLink {...props}>{props.title}</StyledLink>

export default Logo
