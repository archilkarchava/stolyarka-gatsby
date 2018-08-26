import React from 'react'
import styled from 'styled-components'

import Img from './Img'

const BackgroundFilter = styled.div`
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.8)
  );
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.8)
  );
  background: -o-linear-gradient(top, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.8));
  background: -ms-linear-gradient(top, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.8));
  background: linear-gradient(top, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.8));
  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#b2000000', endColorstr='#66000000');
`

const BackgroundImg = props => {
  const { fixed, ...otherProps } = props
  return (
    <>
      <BackgroundFilter
        style={{
          ...props.style,
          width: '100%',
          position: props.fixed ? 'fixed' : 'absolute',
          zIndex: props.zIndex ? parseInt(props.zIndex) + 1 : '-99',
        }}
      />
      <Img
        {...otherProps}
        style={{
          ...props.style,
          width: '100%',
          position: props.fixed ? 'fixed' : 'absolute',
          zIndex: props.zIndex ? parseInt(props.zIndex) : '-100',
        }}
        objFit="cover"
        objPosition="50% 50%"
      />
    </>
  )
}

export default BackgroundImg
