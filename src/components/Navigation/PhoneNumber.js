import React from 'react'
import styled from 'styled-components'

import setTextColor from '../../utils/setTextColor'

const Wrapper = styled.a`
  font-size: ${props => (!!props.size ? props.size : '18px')};
  font-weight: 700;
  &,
  a {
    color: ${props => setTextColor(props.theme.primary)};
  }
`

const PhoneNumber = props => (
  <Wrapper {...props} href={`tel:${props.phoneNumber}`}>
    {props.phoneNumber}
  </Wrapper>
)

export default PhoneNumber
