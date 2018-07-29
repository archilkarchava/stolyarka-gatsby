import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from '../components/Img'
import media from '../components/media'

import Button from './Button'

const BackgroundImg = styled(Img)`
  height: 620px;
  width: 100%;
  z-index: 1;
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`

const BackgroundFilter = styled.div`
  background: -webkit-linear-gradient(top, rgba(0,0,0,0.25), rgba(0,0,0,0.80));
  background: -moz-linear-gradient(top, rgba(0,0,0,0.25), rgba(0,0,0,0.80));
  background: -o-linear-gradient(top, rgba(0,0,0,0.25), rgba(0,0,0,0.80));
  background: -ms-linear-gradient(top, rgba(0,0,0,0.25), rgba(0,0,0,0.80));
  background: linear-gradient(top, rgba(0,0,0,0.25), rgba(0,0,0,0.80));
  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#b2000000', endColorstr='#66000000');
  position: absolute;
  z-index: 2;
  width: 100%;
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
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  color: white;

  h1 {
    margin-bottom: 50px;
    text-transform: uppercase;
    ${media.tablet`
      font-size: 28px;
      margin-bottom: 35px;
    `}
  }
  p {
    margin-bottom: 37px;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.5;
    ${media.tablet`
      margin-bottom: 23px;
      font-size: 16px;
    `}
  }
`

const Header = props => (
  <header>
    <BackgroundFilter>
      <Box>
        <h1>Мебель из массива дерева на заказ</h1>
        <p>Мы с любовью изготавливаем изделия из Дуба, Ясеня, Сосны, Бука, Карагача, Граба</p>
        <Link to='#intro'>
          <Button primary>
            Привет
          </Button>
        </Link>
      </Box>
    </BackgroundFilter>
    <BackgroundImg objFit="cover" objPosition="50% 50%" title="Header image" alt="Мебель из массива дерева на заказ" fluid={props.headerImage.fluid} />
  </header>
)

export default Header
