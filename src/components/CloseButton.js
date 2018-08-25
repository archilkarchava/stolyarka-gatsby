import React from 'react'
import styled from 'styled-components'

import media from '../utils/media'

const OuterWrapper = styled.div`
  position: fixed;
  float: right;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  z-index: 100;
  cursor: pointer;
  ${media.phone`
    background-color: #000000;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    display: table;
    height: 50px;
  `};
`

const InnerWrapper = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  box-sizing: border-box;
  #line-1 {
    transform: rotate(-45deg);
  }
  #line-2 {
    transform: rotate(45deg);
  }
  span {
    width: 100%;
    height: 2px;
    background-color: #ffffff;
    border-radius: 25px;
    display: block;
    top: calc(50% - 1px);
    position: absolute;
  }
  ${media.phone`
    display: table-cell;
    vertical-align: middle;
    text-align: right;
    right: 9px;
    margin: 9px 0;
  `};
`

const CloseButton = props => (
  <OuterWrapper {...props}>
    <InnerWrapper {...props}>
      <span {...props} id="line-1" />
      <span {...props} id="line-2" />
    </InnerWrapper>
  </OuterWrapper>
)

export default CloseButton
