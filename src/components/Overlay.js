import React from 'react'
import styled from 'styled-components'

import media from '../utils/media'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  background: #000000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out;
  ${props =>
    props.mobileOnly
      ? media.tablet`
    opacity: ${props.show ? '0.6' : '0'};
    visibility: ${props.show ? 'visible' : 'hidden'};
    z-index: 100;
  `
      : `
    opacity: ${props.show ? '0.6' : '0'};
    visibility: ${props.show ? 'visible' : 'hidden'};
    z-index: 999;
  `};
`

const Overlay = props => (
  <Wrapper
    mobileOnly={props.mobileOnly}
    onClick={props.click}
    show={props.show}
  />
)

export default Overlay
