import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
  display: block;
  margin: 0 7px;
  color: #d39850;
  font-weight: 400;
  font-style: normal;
  font-size: 1em;
  &:after {
    content: '${props => props.char}';
  }
`

const Separator = props => <StyledSpan {...props} />

export default Separator
