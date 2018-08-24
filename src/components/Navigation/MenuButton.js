import React from 'react'
import styled from 'styled-components'

import media from '../../utils/media'

const Wrapper = styled.div`
  cursor: pointer;
  background-color: transparent;
  box-sizing: border-box;
  display: none;
  float: right;
  position: relative;
  width: 23px;
  height: 19px;
  transform: translateY(-50%);
  top: 50%;
  ${media.tablet`
    display: inline-block;
  `} .line:nth-child(1) {
    opacity: 0;
    transition: 0.2s ease-in-out;
  }
  .line:nth-child(2) {
    transform: rotate(45deg);
    transition: 0.3s ease-in-out;
  }
  .line:nth-child(3) {
    transform: rotate(-45deg);
    transition: 0.3s ease-in-out;
  }
  .line:nth-child(4) {
    opacity: 0;
    transition: 0.2s ease-in-out;
  }
  .line:nth-child(1) {
    opacity: 1;
    transition: 0.2s ease-in-out;
  }
  .line:nth-child(2) {
    transform: rotate(0deg);
    transition: 0.3s ease-in-out;
  }
  .line:nth-child(3) {
    transform: rotate(0deg);
    transition: 0.3s ease-in-out;
  }
  .line:nth-child(4) {
    opacity: 1;
    transition: 0.2s ease-in-out;
  }
`

const Hamburger = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  span {
    width: 100%;
    height: 3px;
    background-color: #000000;
    border-radius: 25px;
    display: block;
    position: absolute;
  }
  .line:nth-child(1) {
    top: 0;
    transition: 0.3s ease-in-out;
    ${props =>
      props.show &&
      `
      transform: rotate(-45deg) translate(-5px, 5px);
    `}
  }
  .line:nth-child(2) {
    top: 8px;
    transition: 0.3s ease-in-out;
    ${props =>
      props.show &&
      `
      opacity: 0;
    `}
  }
  .line:nth-child(3) {
    top: 16px;
    transition: 0.3s ease-in-out;
    ${props =>
      props.show &&
      `
      transform: rotate(45deg) translate(-6px, -6px);
    `}
`

const MenuButton = props => (
  <Wrapper onClick={props.click}>
    <Hamburger {...props}>
      <span className="line" />
      <span className="line" />
      <span className="line" />
    </Hamburger>
  </Wrapper>
)

export default MenuButton
