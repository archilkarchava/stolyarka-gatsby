import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Img from './Img'
import media from '../utils/media'

const Wrapper = styled.ul`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
  font-size: 0;
  list-style: none;
`

const ProductItemContainer = styled.li`
  display: inline-block;
  *display: inline; /*for IE6 - IE7*/
  width: 25%;
  vertical-align: middle;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  ${media.laptop`
    width: 33.3333%;
  `}
  ${media.tablet`
    width: 50%;
  `} ${media.phone`
    width: 100%;
  `};
`

const ProductItem = styled.div`
  cursor: pointer;
  margin: 20px;
  display: block;
  position: relative;
  overflow: hidden;
  .text-block {
    .title {
      margin: 1.4em 0 0 0;
      font-size: 20px;
      font-weight: 600;
    }
    .description {
      margin-top: 8px;
      font-size: 18px;
      font-weight: 400;
      line-height: 1.55;
    }
    .price {
      margin: 0.5em 0.5em 0 0;
      font-size: 18px;
      font-weight: 400;
      line-height: 1.4em;
      display: inline-block;
    }
    .new-price {
      color: #d39850;
    }
    .former-price {
      opacity: 0.7;
      text-decoration: line-through;
    }
    .out-of-stock-notice {
      margin-top: 18px;
      font-size: 14px;
    }
    .button-wrapper {
      margin-top: 12px;
    }
  }
`

const ProductImg = styled(Img)`
  img {
    user-select: none;
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
  var combined = arr1.map(function(el) {
    const findInB = this.filter(function(x) {
      return x.productName === el.productName
    })
    if (findInB.length) {
      const current = findInB[0]
      for (const l in current) {
        if (!el[l]) {
          el[l] = current[l]
        }
      }
    }
    return el
  }, arr2)
  combined = combined.concat(
    arr2.filter(function(el) {
      return !this.filter(function(x) {
        return x.productName === el.productName
      }).length
    }, combined)
  )
  return combined
}

const transformImg2Arr = img2Arr =>
  img2Arr.map(function(edge) {
    return {
      productName: edge.node.relativeDirectory,
      img2Sharp: edge.node.childImageSharp,
    }
  })
const transformImg1Arr = img1Arr =>
  img1Arr.map(function(edge) {
    return {
      productName: edge.node.relativeDirectory,
      img1Sharp: edge.node.childImageSharp,
    }
  })

const ProductItemLayout = productItem => (
  <ProductItem>
    <Link to={`/products/${productItem.productName.replace(/ /g, '_')}`}>
      <ProductImgWrapper>
        {productItem.img1Sharp && (
          <ProductImg
            alt={productItem.productName}
            fluid={{ ...productItem.img1Sharp.fluid, aspectRatio: 4 / 3 }}
          />
        )}
        {productItem.img2Sharp && (
          <ProductImg
            style={{
              position: 'absolute',
              display: 'block',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              opacity: 0,
              transition: 'opacity .3s ease-in',
              margin: 'auto',
            }}
            alt={productItem.productName}
            fluid={{ ...productItem.img2Sharp.fluid, aspectRatio: 4 / 3 }}
          />
        )}
      </ProductImgWrapper>
      <div className="text-block">
        <div className="title">{productItem.productName}</div>
        {productItem.discount > 0 ? (
          <>
            <div className="price new-price">{productItem.discount} рублей</div>
            <div className="price former-price">{productItem.price} рублей</div>
          </>
        ) : (
          <div className="price">{productItem.price} рублей</div>
        )}
      </div>
    </Link>
  </ProductItem>
)

const Store = props => {
  return (
    <StaticQuery
      query={graphql`
        query ProductStoreQuery {
          img1Arr: allFile(
            filter: {
              sourceInstanceName: { eq: "productImages" }
              name: { eq: "1" }
            }
            sort: { fields: relativePath, order: ASC }
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
          }
          img2Arr: allFile(
            filter: {
              sourceInstanceName: { eq: "productImages" }
              name: { eq: "2" }
            }
            sort: { fields: relativePath, order: ASC }
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
          }
          productSpecs: file(relativePath: { eq: "products.yaml" }) {
            childrenProductsYaml {
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
          {combineArraysBasedOnProductName(
            data.productSpecs.childrenProductsYaml,
            combineArraysBasedOnProductName(
              transformImg1Arr(data.img1Arr.edges),
              transformImg2Arr(data.img2Arr.edges)
            )
          )
            .slice(0, props.numberOfProductsDisplayed)
            .map((productItem, index) => (
              <ProductItemContainer key={index}>
                {ProductItemLayout(productItem)}
              </ProductItemContainer>
            ))}
        </Wrapper>
      )}
    />
  )
}

export default Store
