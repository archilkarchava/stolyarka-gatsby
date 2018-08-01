import React from 'react'
import styled from 'styled-components'

import media from '../../utils/media'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 100;
  background: #000000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out;
  ${media.tablet`
    opacity: ${props => props.show ? '0.6' : '0'};
    visibility: ${props => props.show ? 'visible' : 'hidden'};
  `}
`

const Overlay = props => (
  <Wrapper onClick={props.click} show={props.show} />
)

export default Overlay