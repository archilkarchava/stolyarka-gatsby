import styled from 'styled-components'

const Button = styled.button`
  color: ${props =>
    (props.inverted && props.theme.primary)
  };
  ${props => (props.primary && `
  background-color: ${props.theme.primary};
  border: 0 none;
  `) ||
    (props.inverted && `
  background-color: ${props.theme.brandBlack};
  border: 0 none;
  `) ||
    (props.hollow && `
  background-color: transparent;
  border: 1px solid;
  `)}
  ${props => props.small ? `
  font-size: 13px;
  padding: 9px 18px;
  ` : `
  font-size: 14px;
  padding: 13px 50px;
  text-transform: uppercase;
  `}
  border-radius: ${props => props.rounded ? '100px' : '5px'};
  display: inline-block;
  text-align: center;
  white-space: nowrap;
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
