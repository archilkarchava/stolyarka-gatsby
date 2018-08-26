import React from 'react'
import styled from 'styled-components'

import setTextColor from '../utils/setTextColor'

const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  padding: 66px 0;
  height: 19px;
  font-size: 16px;
  background-color: ${props =>
    (props.primaryBg && props.theme.primary) ||
    (props.lightBg && props.theme.light) ||
    (props.darkBg && props.theme.dark) ||
    props.theme.dark};
  color: ${props =>
    setTextColor(
      (props.primaryBg && props.theme.primary) ||
        (props.lightBg && props.theme.light) ||
        (props.darkBg && props.theme.dark) ||
        props.theme.dark
    )};
  text-align: center;
`

const Footer = props => {
  const { title: siteTitle, ...otherProps } = props
  return (
    <Wrapper {...otherProps}>
      <p>&copy; {siteTitle} 2018. Все права защищены.</p>
    </Wrapper>
  )
}

export default Footer
