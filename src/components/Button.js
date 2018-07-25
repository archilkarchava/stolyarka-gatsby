import styled from 'styled-components'
import Link from 'gatsby-link'

const Button = styled(Link)`
  color: black;
  background-color: white;
  text-transform: uppercase;
  border-radius: 100px;
  font-size: 14px;
  padding: 13px 50px;
  display: inline-block;
  border: 0 none;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  font-weight: 700;
  background-image: none;
  cursor: pointer;
  -webkit-appearance: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`

export default Button
