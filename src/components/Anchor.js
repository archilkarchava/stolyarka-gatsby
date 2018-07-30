import styled from 'styled-components'
import media from '../utils/media';

const Anchor = styled.a`
  display: block;
  position: relative;
  top: -${props => props.theme.navHeight};
  visibility: hidden;
  ${media.tablet`
    top: -${props => props.theme.mobileNavHeight};
  `}
`

export default Anchor