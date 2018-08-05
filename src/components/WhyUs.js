import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  width: 100%;
  height: 409px;
  padding-top: 180px;
  padding-bottom: 180px;
  background-color: ${props =>
    (props.primary && props.theme.primary) ||
    (props.accent && props.theme.accent) ||
    props.theme.accent
  };
  &, a {
    color: ${props => setTextColor(
    (props.primary && props.theme.primary) ||
    (props.accent && props.theme.accent) ||
    props.theme.accent
  )};
  h1 {
    text-align: center;
    margin-bottom: 115px;
  }
  .container {
    max-width: 1200px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`
const Item = styled.div`
    max-width: 360px;
    float: left;
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
`

const WhyUs = () => (
  <Wrapper>

  </Wrapper>
)

export default WhyUs
