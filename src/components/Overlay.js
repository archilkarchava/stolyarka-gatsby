import React from 'react'
import styled from 'styled-components'

import media from '../utils/media'

const Wrapper = styled.div`
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transform: translate(9999px);
  transition: opacity 0.3s ease-in-out;
  ${props =>
    props.mobileOnly
      ? media.tablet`
    transform: ${props.show ? 'translate(0)' : 'translate(9999px)'};
    opacity: ${props.show ? '1' : '0'};
    z-index: 100;
    cursor: pointer;
  `
      : `
      transform: ${props.show ? 'translate(0)' : 'translate(9999px)'};
    opacity: ${props.show ? '1' : '0'};
    z-index: 999;
  `};
`

const CloseButton = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
  color: #fff;
  cursor: pointer;
`

const Overlay = props => (
  <Wrapper
    mobileOnly={props.mobileOnly}
    onClick={props.click}
    show={props.show}
  >
    {props.children}
  </Wrapper>
)

export default Overlay
