import React from 'react'
import styled from 'styled-components'
import InputMask from 'react-input-mask'

import Button from './Button'
import CloseButton from './CloseButton'
import Img from './Img'

import media from '../utils/media'

const OuterWrapper = styled.div`
  z-index: 1000;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.8);
  visibility: hidden;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${props => (props.show ? '1' : '0')};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
`

const InnerWrapper = styled.div`
  background-color: #ffffff;
  padding: 40px;
  margin: 65px auto;
  max-width: 560px;
  box-sizing: border-box;
  ${media.phone`
    padding: 40px 10px;
    margin: 0 auto;
    margin-top: 50px;
    min-height: calc(100% - 50px);
  `};
`

const Form = styled.form`
  font-weight: 300;
  font-style: normal;
  position: relative;
  * {
    display: block;
  }
  .input-error {
    color: red;
    font-size: 13px;
    margin-top: 5px;
  }
  .error-border {
    border: 1px solid red !important;
  }
  div {
    margin-bottom: 20px;
  }
  input,
  textarea {
    font-family: 'Montserrat', sans-serif;
    color: #000000;
    border: 1px solid #999696;
    border-radius: 30px;
    box-sizing: border-box;
    font-size: 16px;
    padding: 0 20px;
    margin: 0;
    line-height: 1.33;
    width: 100%;
  }
  input {
    height: 55px;
  }
  textarea {
    height: 156px;
    padding-top: 17px;
  }
  .input-title {
    font-size: 15px;
    line-height: 1.55;
    padding-bottom: 5px;
  }
  .hidden {
    display: none;
  }
`

const Heading = styled.div`
  padding: 0 0 30px 0;
  font-size: 24px;
  line-height: 1.35;
  font-weight: 600;
`

const Product = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  display: table;
  .row {
    display: table-row;
    .product-thumbnail {
      display: table-cell;
      width: 70px;
      height: 100px;
      vertical-align: middle;
    }
    .product-name {
      display: table-cell;
      font-size: 16px;
      padding: 15px 0;
      font-weight: 600;
      vertical-align: middle;
      text-align: center;
      line-height: 1.55;
      padding: 0 10px;
    }
    .product-price {
      display: table-cell;
      text-align: center;
      width: 80px;
      font-size: 16px;
      padding: 15px 0;
      vertical-align: middle;
      line-height: 1.55;
    }
  }
`

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

class OrderPopup extends React.Component {
  state = {
    data: {
      name: '',
      phone: '',
      message: '',
    },
    errors: {},
  }
  handleChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value },
    })
  handleSubmit = e => {
    e.preventDefault()
    const errors = this.validate(this.state.data)
    this.setState({ errors })
    if (Object.keys(errors).length === 0) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...this.state }),
      })
        .then(() =>
          alert('Заказ успешно оформлен. Мы перезвоним вам в ближайшее время.')
        )
        .catch(error => this.setState({ errors: error.response.data.errors }))
    }
  }
  validate = data => {
    const errors = {}
    if (!data.name) errors.name = 'Поле обязательно для заполнения.'
    if (!data.phone) errors.phone = 'Введите номер телефона для связи.'
    return errors
  }

  render() {
    const { node: productSpecs } = this.props.data.productSpecs.edges[0]
    const { edges: productImages } = this.props.data.productImages
    const { errors, data } = this.state
    return (
      <OuterWrapper
        {...this.props}
        onClick={this.props.click}
        show={this.props.show}
      >
        <CloseButton className="close-popup-button" />
        <InnerWrapper className="content" {...this.props}>
          <Heading>Ваш заказ</Heading>
          <Product>
            <div className="row">
              <div className="product-thumbnail">
                <Img
                  style={{ width: '70px', height: '70px' }}
                  fluid={productImages[0].node.thumbnailImgSharp.fluid}
                />
              </div>
              <div className="product-name">{productSpecs.productName}</div>
              <div className="product-price">
                {productSpecs.discount > 0
                  ? productSpecs.discount
                  : productSpecs.price}{' '}
                р.
              </div>
            </div>
          </Product>
          <Form onSubmit={this.handleSubmit}>
            <div>
              <p className="input-title">Ваше имя</p>
              <input
                className={errors.name && 'error-border'}
                onChange={this.handleChange}
                value={data.name}
                type="text"
                name="name"
                autoComplete="name"
              />
              {errors.name && <div className="input-error">{errors.name}</div>}
            </div>
            <div>
              <p className="input-title">Номер телефона</p>
              <InputMask
                className={errors.phone && 'error-border'}
                onChange={this.handleChange}
                value={data.phone}
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="+7 (900) 000-00-00"
                mask="+7 (999) 999-99-99"
              />
              {errors.phone && (
                <div className="input-error">{errors.phone}</div>
              )}
            </div>
            <div>
              <p className="input-title">Комментарий к заказу</p>
              <textarea
                value={data.message}
                onChange={this.handleChange}
                name="message"
              />
            </div>
            <Button big wide dark rounded>
              {productSpecs.isStocked ? 'Купить' : 'Заказать'}
            </Button>
          </Form>
        </InnerWrapper>
      </OuterWrapper>
    )
  }
}

export default OrderPopup
