import styled from 'styled-components'
import setTextColor from '../utils/setTextColor'

const Button = styled.button`
  ${props =>
    (props.primary &&
      `
  background-color: ${props.theme.primary};
  color: ${setTextColor(props.theme.primary)};
  font-weight: 600;
  border: 0 none;
  `) ||
    (props.accent &&
      `
  background-color: ${props.theme.accent};
  color: ${setTextColor(props.theme.accent)};
  font-weight: 600;
  border: 0 none;
  `) ||
    (props.hollow &&
      `
  background-color: transparent;
  border: 2px solid ${props.theme.accent};
  font-weight: 500;
  transition: 0.1s background-color linear, 0.1s color linear;
  &:hover {
    background-color: ${props.theme.accent};
    color: ${setTextColor(props.theme.accent)};
  }
  `) ||
    `
  background-color: ${props.theme.primary};
  color: ${setTextColor(props.theme.primary)};
  font-weight: 600;
  border: 0 none;
  `} ${props =>
  (props.small &&
    `
      font-size: 13px;
      padding: 9px 18px;
    `) ||
  (props.regular &&
    `
      font-size: 14px;
      padding: 13px 50px;
    `) ||
  (props.big &&
    `
      font-size: 16px;
      padding: 17px 70px;
    `) ||
  `
      font-size: 14px;
      padding: 13px 50px;
    `}
  ${props => props.wide && `width: 100%`};
  text-transform: uppercase;
  border-radius: ${props => (props.rounded ? '100px' : '3px')};
  display: inline-block;
  text-align: center;
  white-space: nowrap;
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
