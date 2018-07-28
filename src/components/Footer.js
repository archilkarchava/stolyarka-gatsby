import styled from 'styled-components'

const Footer = styled.footer`
  padding: 66px 0;
  font-size: 14px;
  background: ${props => props.theme.brandBlack};
  color: ${props => props.theme.primary};
  text-align: center;
  bottom: 0;
  width: 100%;
  position: 'absolute';
`

export default Footer
