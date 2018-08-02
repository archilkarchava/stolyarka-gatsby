import React from 'react'
import styled from 'styled-components'

import vk from '../images/vk.svg'
import instagram from '../images/instagram.svg'

const Wrapper = styled.div`
  position: relative;
  vertical-align: middle;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  img {
    display: inline-block;
    margin: 0 ${props => !!props.spaceBetween ? props.spaceBetween : '7px'};
    height: 28px;
  }
`

const SocialLinks = props => (
  <Wrapper {...props}>
    <a target="_blank" rel="noopener noreferrer" href="https://vk.com/"><img src={vk} alt="vk" /></a>
    <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/"><img src={instagram} alt="instagram" /></a>
  </Wrapper>
)

export default SocialLinks
