import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.a`
  font-size: 18px;
  font-weight: 700;
`

const PhoneNumber = props => (
  <Wrapper {...props} href={`tel:${props.phoneNumber}`}>
    {props.phoneNumber}
  </Wrapper>
)


export default PhoneNumber
