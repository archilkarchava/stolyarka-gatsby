import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from '../components/Img'

import Button from './Button'

const Container = styled.div`
  height: 650px;
  width: 100%;
  z-index: 4;
  display: inline-block;
  
`

const BackgroundImg = styled(Img)`
  height: 650px;
  width: 100%;
  z-index: 1;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`

const BackgroundFilter = styled.div`
  background: -webkit-linear-gradient(top, rgba(0,0,0,0.25), rgba(0,0,0,0.90));
  background: -moz-linear-gradient(top, rgba(0,0,0,0.25), rgba(0,0,0,0.90));
  background: -o-linear-gradient(top, rgba(0,0,0,0.25), rgba(0,0,0,0.90));
  background: -ms-linear-gradient(top, rgba(0,0,0,0.25), rgba(0,0,0,0.90));
  background: linear-gradient(top, rgba(0,0,0,0.25), rgba(0,0,0,0.90));
  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#b2000000', endColorstr='#66000000');
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 650px;
`

const Box = styled.div`
  z-index: 3;
  text-align: center;
  max-width: 522px;
  padding: 0 20px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);

  h1, p {
    padding-bottom: 50px;
    color: white;
  }
  h1 {
    text-transform: uppercase;
  }
  p {
    line-height: 1.5;
  }
`

const Header = props => (
  <div>
    <BackgroundFilter>
      <Box>

          <h1>Мебель из массива дерева на заказ</h1>
          <p>Мы с любовью изготавливаем изделия из Дуба, Ясеня, Сосны, Бука, Карагача, Граба</p>
          <Link to="#intro">
            <Button>Привет</Button>
          </Link>

      </Box>
    </BackgroundFilter>
    <BackgroundImg title="Header image" alt="Мебель из массива дерева на заказ" sizes={props.headerImage.sizes}/>
  </div>
)


export default Header
