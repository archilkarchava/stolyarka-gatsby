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
  `}
  .line:nth-child(1){
    opacity: 0;
    transition: .2s ease-in-out;
  }
  .line:nth-child(2){
    transform: rotate(45deg);
    transition: .3s ease-in-out;
  }
  .line:nth-child(3){
    transform: rotate(-45deg);
    transition: .3s ease-in-out;
  }
  .line:nth-child(4){
    opacity: 0;
    transition: .2s ease-in-out;
  }
  .line:nth-child(1){
    opacity: 1;
    transition: .2s ease-in-out;
  }
  .line:nth-child(2){
    transform: rotate(0deg);
    transition: .3s ease-in-out;
  }
  .line:nth-child(3){
    transform: rotate(0deg);
    transition: .3s ease-in-out;
  }
  .line:nth-child(4){
    opacity: 1;
    transition: .2s ease-in-out;
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
    background-color: black;
    border-radius: 25px;
    display: block;
    position: absolute;
  }
  .line:nth-child(1) {
    top 0;
  }
  .line:nth-child(2) {
    top 8px;
  }
  .line:nth-child(3) {
    top 8px;
  }
  .line:nth-child(4) {
    top 16px;
  }
`

const MenuButton = props => (
  <Wrapper {...props} onClick={props.click}>
    <Hamburger>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </Hamburger>
  </Wrapper>
)

export default MenuButton