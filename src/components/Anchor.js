import styled from 'styled-components'
import media from './media';

import { NavHeight, mobileNavHeight } from './Navbar'

const Anchor = styled.a`
  display: block;
  position: relative;
  top: -${NavHeight};
  visibility: hidden;
  ${media.tablet`
    top: -${mobileNavHeight};
  `}
`

export default Anchor