import styled from 'styled-components'
import setTextColor from '../utils/setTextColor'
import media from '../utils/media'

const TextBlock = styled.div`
  background-color: ${props =>
    (props.primaryBg && props.theme.primary) ||
    (props.lightBg && props.theme.light) ||
    (props.darkBg && props.theme.dark) ||
    props.theme.primary};
  color: ${props =>
    setTextColor(
      (props.primaryBg && props.theme.primary) ||
        (props.lightBg && props.theme.light) ||
        (props.darkBg && props.theme.dark) ||
        props.theme.primary
    )};
  text-align: center;
  font-size: 30px;
  padding: 100px 20px;
  ${media.tablet`
    font-size: 18px;
    padding: 50px 20px;
  `};
`

export default TextBlock
