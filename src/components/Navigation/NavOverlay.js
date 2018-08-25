import React from 'react'
import styled from 'styled-components'

import media from '../../utils/media'

const Wrapper = styled.div`
  position: fixed;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
  z-index: 700;
  cursor: pointer;
  ${media.tablet`
    opacity: ${props => (props.show ? '1' : '0')};
    visibility: ${props => (props.show ? 'visible' : 'hidden')};
  `};
`

const NavOverlay = props => <Wrapper onClick={props.click} show={props.show} />

export default NavOverlay
