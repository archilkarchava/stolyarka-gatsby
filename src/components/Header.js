import React from 'react'
import styled from 'styled-components'
import BackgroundImg from './BackgroundImg'
import media from '../utils/media'

const Wrapper = styled.header`
  z-index: -100;
  height: 620px;
`

const Box = styled.div`
  z-index: 3;
  text-align: center;
  max-width: 610px;
  padding: 0 20px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: #ffffff;

  h1 {
    margin-bottom: 50px;
    font-weight: 600;
    line-height: 1.23;
    font-size: 50px;
    text-transform: uppercase;
    ${media.tablet`
      font-size: 32px;
      margin-bottom: 35px;
    `};
  }
  p {
    margin-bottom: 37px;
    font-weight: 300;
    font-size: 24px;
    line-height: 1.5;
    ${media.tablet`
      margin-bottom: 23px;
      font-size: 19px;
    `};
  }
`

const Header = props => (
  <Wrapper>
    <BackgroundImg
      style={{
        height: '620px',
      }}
      title="Header image"
      alt="Мебель из массива дерева на заказ"
      fluid={props.bgImg.fluid}
      {...props}
    />
    <Box>
      <h1>Мебель из массива дерева на заказ</h1>
      <p>
        Мы с любовью изготавливаем изделия из Дуба, Ясеня, Сосны, Бука,
        Карагача, Граба
      </p>
    </Box>
  </Wrapper>
)

export default Header
