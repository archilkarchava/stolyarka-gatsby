import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import Slider from 'react-slick'
import Layout from '../components/layout'
import Divider from '../components/Divider'
import Separator from '../components/Separator'
import Button from '../components/Button'
import ShareLinks from '../components/ShareLinks'
import OrderPopup from '../components/OrderPopup'

import Img from '../components/Img'

import media from '../utils/media'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Wrapper = styled.div`
  padding: 100px 50px;
  height: 100%;
  ${media.tablet`
    padding: 50px 30px;
  `} ${media.phone`
    padding: 50px 15px;
  `};
`

const ImagesWrapper = styled.div`
  position: relative;
  width: calc(50% - 50px);
  float: left;
  margin: 0;
  .thumbnail-img {
    max-width: 120px;
    max-height: 120px;
  }
  .main-slider {
    margin-bottom: 30px;
  }
  .thumbnail-slider {
    max-width: ${props =>
      props.thumbnailSliderWidth <= 5
        ? `${props.thumbnailSliderWidth * 135}px`
        : `100%`};
  }
  .slick-prev:before,
  .slick-next:before {
    color: #000000;
  }
  ${media.tablet`
  width: 100%;
  `};
`

const ProductMenu = styled.nav`
  overflow: hidden;
  line-height: 1em;
  font-size: 14px;
  margin-bottom: 30px;
  .breadcrumb {
    float: left;
    * {
      display: inline-block;
    }
  }
  .pagination {
    float: right;
  }
`

const ProductSpecs = styled.div`
  padding: 0 0 0 100px;
  width: calc(50% - 50px);
  float: left;
  h1 {
    letter-spacing: 0px;
    font-weight: 400;
    font-size: 45px;
    line-height: 1.25em;
  }
  p {
    font-weight: 400;
    font-style: normal;
    font-size: 15px;
    letter-spacing: 0px;
    line-height: 1.5em;
  }
  .price {
    margin-bottom: 30px;
    font-size: 28px;
    font-weight: 300;
    display: block;
  }
  .current-price {
    margin-right: 0.5em;
    color: #d39850;
    display: inline-block;
  }
  .former-price {
    opacity: 0.7;
    text-decoration: line-through;
    display: inline-block;
  }
  .button-wrapper {
    display: block;
    margin: 0 0 30px 0;
  }
  .description {
    margin: 0 0 30px 0;
  }
  .specifications {
    padding-left: 40px;
  }
  .note {
    margin: 30px 0 30px 0;
  }
  ${media.laptop`
    padding: 0 0 0 50px;
    h1 {
      font-size: 30px
    }
    .price {
      font-size: 20px
    }
  `} ${media.tablet`
    padding: 30px 0 0 0;
    width: 100%;
    height: 50%;
  `};
`

class ProductPageTemplate extends React.Component {
  state = {
    imgMainSlider: null,
    imgThumbnailSlider: null,
    buyProductPopupOpen: false,
  }
  componentDidMount() {
    this.setState({
      nav1: this.imgMainSlider,
      nav2: this.imgThumbnailSlider,
    })
  }
  buyButtonClickHandler = () => {
    this.setState({ buyProductPopupOpen: true }, () => {})
  }
  overlayClickHandler = e => {
    if (
      e.target.classList.contains('close-popup-button') ||
      e.target === e.currentTarget
    ) {
      this.setState({ buyProductPopupOpen: false }, () => {})
    }
  }
  render() {
    const { node: productSpecs } = this.props.data.productSpecs.edges[0]
    const { edges: productImages } = this.props.data.productImages
    return (
      <>
        <Layout>
          <Helmet
            title={productSpecs.productName}
            meta={[
              { name: 'description', content: productSpecs.description },
              { name: 'keywords', content: 'test' },
            ]}
            bodyAttributes={{
              class: this.state.buyProductPopupOpen ? `noscroll` : '',
            }}
          />
          <OrderPopup
            click={e => this.overlayClickHandler(e)}
            show={this.state.buyProductPopupOpen}
            {...this.props}
          />
          <Wrapper className="clearfix">
            <ProductMenu>
              <div className="breadcrumb">
                <Link to="products">Магазин</Link>
                <Separator char="›" />
                <div>{productSpecs.productName}</div>
              </div>
            </ProductMenu>
            <ImagesWrapper thumbnailSliderWidth={productImages.length}>
              <Slider
                className="main-slider"
                arrows={false}
                fade={true}
                lazyLoad={true}
                infinite={true}
                speed={600}
                slidesToShow={1}
                slidesToScroll={1}
                asNavFor={this.state.nav2}
                ref={slider => (this.imgMainSlider = slider)}
              >
                {productImages.map(image => (
                  <Img
                    key={image.node.name}
                    alt={productSpecs.productName}
                    fluid={image.node.fullImgSharp.fluid}
                  />
                ))}
              </Slider>
              {productImages.length > 1 && (
                <Slider
                  className="thumbnail-slider"
                  arrows={productImages.length > 5}
                  slidesToShow={
                    productImages.length <= 5 ? productImages.length : 5
                  }
                  swipeToSlide={true}
                  focusOnSelect={true}
                  centerMode={productImages.length > 5}
                  asNavFor={this.state.nav1}
                  ref={slider => (this.imgThumbnailSlider = slider)}
                >
                  {productImages.map(image => (
                    <Img
                      outerWrapperClassName="thumbnail-img"
                      key={image.node.name}
                      alt={productSpecs.productName}
                      fluid={{
                        ...image.node.thumbnailImgSharp.fluid,
                        aspectRatio: 1 / 1,
                      }}
                    />
                  ))}
                </Slider>
              )}
            </ImagesWrapper>
            <ProductSpecs>
              <h1 className="title">{productSpecs.productName}</h1>
              <Divider />
              {productSpecs.discount > 0 ? (
                <div className="price">
                  <div className="current-price">
                    {productSpecs.discount} рублей
                  </div>
                  <div className="former-price">
                    {productSpecs.price} рублей
                  </div>
                </div>
              ) : (
                <div className="price current-price">
                  {productSpecs.price} рублей
                </div>
              )}
              <div className="button-wrapper">
                <Button rounded big hollow onClick={this.buyButtonClickHandler}>
                  {productSpecs.isStocked ? 'Купить' : 'Заказать'}
                </Button>
              </div>
              <div className="description">
                {productSpecs.description && <p>{productSpecs.description}</p>}
              </div>
              <ul className="specifications">
                {productSpecs.material && (
                  <li>
                    <p>Материал: {productSpecs.material}</p>
                  </li>
                )}
                {productSpecs.woodType && (
                  <li>
                    <p>Материал: {productSpecs.woodType}</p>
                  </li>
                )}
                {productSpecs.color && (
                  <li>
                    <p>Цвет: {productSpecs.color}</p>
                  </li>
                )}
                {productSpecs.sizes && (
                  <li>
                    <p>Размер: {productSpecs.sizes}</p>
                  </li>
                )}
              </ul>
              {productSpecs.note && (
                <p className="note">
                  <em>{productSpecs.note}</em>
                </p>
              )}
              <ShareLinks {...this.props} />
            </ProductSpecs>
          </Wrapper>
        </Layout>
      </>
    )
  }
}

export const productPageQuery = graphql`
  query ProductPageQuery($productName: String!) {
    productImages: allFile(
      filter: { relativeDirectory: { eq: $productName } }
      sort: { fields: relativePath, order: ASC }
    ) {
      edges {
        node {
          name
          fullImgSharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          thumbnailImgSharp: childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    productSpecs: allProductsJson(
      filter: { productName: { eq: $productName } }
    ) {
      edges {
        node {
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
  }
`

export default ProductPageTemplate
