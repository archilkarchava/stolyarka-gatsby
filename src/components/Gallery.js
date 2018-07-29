import React from 'react'
import styled from 'styled-components'
import Img from '../components/Img'
import media from './media';

const Wrapper = styled.div`
  background-color: ${props =>
    (props.primary && props.theme.primary) ||
    (props.secondary && props.theme.secondary) ||
    props.theme.primary
  };
  font-size: 0;
  margin: 0 auto;
  max-width: 1240px;
  ${media.desktop`
    max-width: 940px;
  `}
  ${media.laptop`
    max-width: 720px;
  `}
  ${media.tablet`
  `}
`

const ProductItem = styled.div`
  overflow: hidden;
  cursor: pointer;
  display: inline-block;
  margin: 0 15px 60px 15px;
  width: calc(33.3333% - 30px);
  &:nth-last-child(1) {
    margin-bottom: 0;
  }
  &:nth-last-child(2) {
    margin-bottom: 0;
  }
  &:nth-last-child(3) {
    margin-bottom: 0;
  }
  ${media.laptop`
    margin: 0 10px 40px 10px;
    width: calc(50% - 20px);
    &:nth-last-child(3) {
      margin-bottom: 40px;
    }
  `}
  ${media.tablet`
    margin: 0 10px 20px 10px;
    width: calc(50% - 20px);
    &:nth-last-child(3) {
      margin-bottom: 20px;
    }
  `}
  ${media.phone`
    margin: 10px 20px;
    width: calc(100% - 40px);
    &:nth-last-child(2) {
      margin-bottom: 20px;
    }
  `}

`
const ColorOverlay = styled.div`
  position: relative;
  width: 100%;
  height: 360px;
  background: rgba(0,0,0,.75) !important;
  opacity: 0;
  cursor: pointer;
  transition: all .1s ease-in;
  span {
/*     display: table-cell;
    position: relative;
    font-size: 14px;
    text-align: center; */
  }
`

const ProductImg = styled(Img)`
  transition: transform .2s ease-in-out;
  &:hover {
    transform: scale(1.15);
  }
`

const Gallery = props => (
  <Wrapper {...props}>
    {props.imageArray.map(image => (
      <ProductItem key={image.node.id}>
        <ProductImg key={image.node.id} fluid={image.node.childImageSharp.fluid} alt={image.node.name.replace(/-/g, ' ')} />
        {/*         <ColorOverlay>
          <span>{image.node.name.replace(/-/g, ' ')}</span>
        </ColorOverlay> */}
      </ProductItem>
    ))}
  </Wrapper>
)

export default Gallery
