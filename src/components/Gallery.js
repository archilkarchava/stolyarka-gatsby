import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Button from '../components/Button'

import Img from '../components/Img'
import media from '../utils/media';

const Wrapper = styled.ul`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  font-size: 0;
  list-style: none;
`

const ProductItemContainer = styled.li`
  display: inline-block;
  *display: inline;/*for IE6 - IE7*/
  width: 33.33%;
  vertical-align: middle;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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
  ${media.tablet`
    width: 50%;
  `}
  ${media.phone`
    width: 100%;
  `}
`

const ProductItem = styled.div`
  margin: 12px;
  display: block;
  position: relative;
  overflow: hidden;
`

const ProductImg = styled(Img)`
  img {
    user-drag: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
  }  
  &:hover {
    opacity: 1 !important;
  }
`

const ProductImgWrapper = styled.div`
  position: relative;
  height: 100%;
`


const combineArraysBasedOnProductName = (arr1, arr2) => {
  var combined = arr1.map(
    function (el) {
      const findInB = this.filter(function (x) { return x.productName === el.productName; });
      if (findInB.length) {
        const current = findInB[0];
        for (const l in current) {
          if (!el[l]) { el[l] = current[l]; }
        }
      }
      return el;
    }, arr2);
  combined = combined.concat(arr2.filter(
    function (el) {
      return !this.filter(function (x) { return x.productName === el.productName; }).length;
    }, combined));
  return combined;
}

const transformImg2Arr = img2Arr => (
  img2Arr.map(function (edge) {
    return {
      productName: edge.node.relativeDirectory,
      img2Sharp: edge.node.childImageSharp
    };
  })
)
const transformImg1Arr = img1Arr => (
  img1Arr.map(function (edge) {
    return {
      productName: edge.node.relativeDirectory,
      img1Sharp: edge.node.childImageSharp
    };
  })
)

const ProductItemLayout = productItem =>
  <ProductItem>
    <ProductImgWrapper>
      {productItem.img1Sharp &&
        <ProductImg alt={productItem.productName} fluid={{ ...productItem.img1Sharp.fluid, aspectRatio: 4 / 3 }} />
      }
      {productItem.img2Sharp &&
        <ProductImg
          style={{
            position: 'absolute',
            display: 'block',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            opacity: 0,
            transition: 'all .3s',
            transitionDelay: '.3s',
            margin: 'auto'
          }}
          alt={productItem.productName} fluid={{ ...productItem.img2Sharp.fluid, aspectRatio: 4 / 3 }} />
      }
    </ProductImgWrapper>
    <div className="text-block">
      <div className="title">{productItem.productName}</div>
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

const Gallery = props => {
  return (
    <StaticQuery
      query={graphql`
        query ProductStoreQuery {
          img1Arr: allFile(
            filter: { sourceInstanceName: { eq: "productImages"}, name: {eq: "1"}}
            sort: { fields: relativePath, order: ASC}
          ) {
            edges {
              node {
                relativeDirectory
                childImageSharp {
                  fluid(maxWidth: 784) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          },
          img2Arr: allFile(
            filter: { sourceInstanceName: { eq: "productImages"}, name: {eq: "2"}}
            sort: { fields: relativePath, order: ASC}
          ) {
            edges {
              node {
                relativeDirectory
                childImageSharp {
                  fluid(maxWidth: 784) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          },
          productSpecs: file(relativePath: {eq: "products.json"}) {
            childrenProductsJson {
              id
              productName
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
        <Wrapper {...props}>
          {
            combineArraysBasedOnProductName(
              data.productSpecs.childrenProductsJson,
              combineArraysBasedOnProductName(
                transformImg1Arr(data.img1Arr.edges),
                transformImg2Arr(data.img2Arr.edges)
              )
            )
              .slice(0, props.numberOfProductsDisplayed)
              .map(productItem => (
                <ProductItemContainer key={productItem.id}>
                  {ProductItemLayout(productItem)}
                </ProductItemContainer>
              ))
          }
        </Wrapper>
      )
      }
    />
  )
}

export default Gallery
