import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import alasql from 'alasql'

import Button from '../components/Button'

import Img from '../components/Img'
import media from '../utils/media';

const Wrapper = styled.div`
  position: relative;
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
  display: inline-block;
  margin: 0 15px 60px 15px;
  width: calc(33.3333% - 30px);
  .text-block {
    margin-top: 20px;
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
      margin-top: 15px;
      font-size: 16px;
      line-height: 1.35;
      font-weight: 600;
      display: inline-block;
    }
    .former-price {
      opacity: .5;
      text-decoration: line-through;
      margin-right: 10px;
    }
    .out-of-stock-notice {
      margin-top: 18px;
      font-size: 14px;
    }
    .button-wrapper {
      margin-top: 12px;
    }
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
    color: ${props => props.theme.baseFontColor};
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
  padding-bottom: 77%;
  height: 0;
  pointer-events: none;
  user-select: none;
`

const mergeArrays = (arr1, arr2) => (
  alasql('SELECT * FROM ? arr1 \
  JOIN ? arr2 USING name', [arr1, arr2])
)

const transformArrayOfImages = imgArr => (
  imgArr.map(function (edge) {
    return {
      index: edge.node.name,
      name: edge.node.relativeDirectory,
      childImageSharp: edge.node.childImageSharp
    };
  })
)

const Gallery = props => {
  return (
    <StaticQuery
      query={graphql`
        query ProductStoreQuery {
          productImages: allFile(
            filter: { sourceInstanceName: { eq: "productImages"}, name: {eq: "1"}}
            sort: { fields: relativePath, order: ASC}
          ) {
            edges {
              node {
                name
                relativeDirectory
                childImageSharp {
                  fluid(maxWidth: 392) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          },
          productSpecs: file(relativePath: {eq: "products.json"}) {
            childrenProductsJson {
              index
              name
              type
              material
              woodType
              color
              sizes
              shortDescription
              description
              note
              price
              discount
              isStocked
            }
          }
        }
      `}
      render={data => (
        < Wrapper {...props}>
          {
            mergeArrays(transformArrayOfImages(data.productImages.edges), data.productSpecs.childrenProductsJson).slice(0, props.numberOfProductsDisplayed).map(productItem => (
              <ProductItem key={productItem.index}>
                <div>
                  <ProductImg title="Изображение продукта" alt={productItem.name} fluid={productItem.childImageSharp.fluid} />
                </div>
                <div className="text-block">
                  <div className="title">{productItem.name}</div>
                  {productItem.isStocked ?
                    <>
                      {productItem.discount > 0 ?
                        <>
                          <div className="price former-price">{productItem.price} рублей</div>
                          <div className="price">{productItem.discount} рублей</div>
                        </> :
                        <div className="price">{productItem.price} рублей</div>
                      }
                      <div className="button-wrapper">
                        <Link to='/'>
                          <Button hollow rounded small>Купить</Button>
                        </Link>
                      </div>
                    </>
                    :
                    <>
                      {/* <s><div className="price price-out-of-stock strike-through">{productItem.price} рублей</div></s> */}
                      <div className="out-of-stock-notice">Нет в наличии.</div>
                      <div className="button-wrapper">
                        <Link to='/'>
                          <Button hollow rounded small>Заказать</Button>
                        </Link>
                      </div>
                    </>
                  }
                </div>
              </ProductItem>
            ))
          }
        </Wrapper>
      )
      }
    />
  )
}

export default Gallery
