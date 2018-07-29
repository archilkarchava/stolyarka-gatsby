import React from 'react'
import styled from 'styled-components'
import Img from '../components/Img'
import media from './media';

const Wrapper = styled.div`
  position: relative;
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
  .text-block {
    margin-top: 20px;
  }
  .title {
    font-size: 20px;
    font-weight: 600;
  }
  .description {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.55;
  }
  .price {
    margin-top: 12px;
    font-size: 16px;
    line-height: 1.35;
    font-weight: 600;
    display: inline-block;
    vertical-align: middle;
  }

  &:nth-last-child(1) {
    margin-bottom: 0;
  }
  &:nth-last-child(2) {
    margin-bottom: 0;
  }
  &:nth-last-child(3) {
    margin-bottom: 0;
  }
  h2 {
    color: #000;
    text-align: center;
    width: 100%
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
const ColorOverlay = styled.span`
  opacity: 0;
  &:hover{
    transition: opacity 0.25s ease-in-out;
    opacity: 1;
  }
  cursor: pointer;
  position: relative;
  display: block;
  padding-top: 77%;
  height: 100%;
  width: 100%;
  top: 100%;
  background: ${props => props.theme.brandBlack};
`

const ProductImg = styled(Img)`
  margin: 0;
  position: relative;
  display: block;
  padding-bottom: 77%;
  height: 0;
`

const Gallery = props => (
  <Wrapper {...props}>
    {props.imageArray.map(image => (
      <ProductItem key={image.node.id}>
        <div>
          <ProductImg key={image.node.id} fluid={image.node.childImageSharp.fluid} alt={image.node.name.replace(/-/g, ' ')} />
        </div>
        <div className="text-block">
          <div className="title">{image.node.name.replace(/-/g, ' ')}</div>
          <div className="description">Описание товара</div>
          <div className="price">&#8381;20000</div>
        </div>
      </ProductItem>
    ))}
  </Wrapper>
)

export default Gallery
