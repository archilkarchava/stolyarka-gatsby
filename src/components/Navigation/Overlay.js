import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all .3s ease-in-out;
  cursor: pointer;
  z-index: 10;
  background: black;
  opacity: .6;
`
export default Overlay