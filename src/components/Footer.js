import React from 'react'
import styled from 'styled-components'

import SocialLinks from './SocialLinks'

import setTextColor from '../utils/setTextColor'

const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  padding: 50px 0;
  font-size: 16px;
  p {
    margin-bottom: 5px;
  }
  background-color: ${props =>
    (props.primaryBg && props.theme.primary) ||
    (props.lightBg && props.theme.light) ||
    (props.darkBg && props.theme.dark) ||
    props.theme.dark};
  *,
  a {
    color: ${props =>
      setTextColor(
        (props.primaryBg && props.theme.primary) ||
          (props.lightBg && props.theme.light) ||
          (props.darkBg && props.theme.dark) ||
          props.theme.dark
      )};
  }
  text-align: center;
`

const Footer = props => {
  const { title: siteTitle, ...otherProps } = props
  return (
    <Wrapper {...otherProps}>
      <div>
        <p>&copy; {siteTitle} 2018. Все права защищены.</p>
        <SocialLinks
          style={{
            fontSize: '20px',
            height: '24px',
          }}
        />
      </div>
    </Wrapper>
  )
}

export default Footer
