import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faVk, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Wrapper = styled.div`
  position: relative;
  vertical-align: middle;
  list-style: none;
  font-size: 32px;
  ${props => props.centered && 'text-align: center'};
  margin: ${props => props.margin};
  a {
    display: inline;
    margin: 0 ${props => !!props.spaceBetween ? props.spaceBetween : '7px'};
  }
`

const SocialLinks = props => (
  <Wrapper {...props}>
    <a target="_blank" rel="noopener noreferrer" href="https://vk.com/"><FontAwesomeIcon icon={faVk} /></a>
    <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
  </Wrapper>
)

export default SocialLinks
