import styled from 'styled-components'
import setTextColor from '../utils/setTextColor'

const Footer = styled.footer`
  padding: 66px 0;
  font-size: 14px;
  background-color: ${props =>
    (props.primary && props.theme.primary) ||
    (props.accent && props.theme.accent) ||
    props.theme.primary
  };
  color: ${props => setTextColor(
    (props.primary && props.theme.primary) ||
    (props.accent && props.theme.accent) ||
    props.theme.primary)};
  text-align: center;
  bottom: 0;
  width: 100%;
  position: 'relative';
`

export default Footer
