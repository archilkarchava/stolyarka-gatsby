import React from 'react'
import styled from 'styled-components'
import Img from '../components/Img'

import Button from '../components/Button'

const Wrapper = styled.div`
  font-size: 0;
  margin: 0 auto;
  @media (min-width: 769px) {
    & {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 970px;
    }
  }
  @media (min-width: 1300px) {
    & {
      width: 1270px;
    }
  }
`

const ProductItem = styled.div`
  overflow: hidden;
  cursor: pointer;
  display: inline-block;
  margin: 10px 30px;
  width: calc(100% - 60px);
  &:nth-last-child(1) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 480px) {
    & {
      margin: 0 10px 20px 10px;
      width: calc(50% - 20px);
    }
    &:nth-last-child(2) {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 992px) {
    & {
      margin: 0 10px 40px 10px;
      width: calc(50% - 20px);
    }
    &:nth-last-child(2) {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 1300px) {
    & {
      margin: 0 15px 60px 15px;
      width: calc(33.3333% - 30px);
    }
    &:nth-last-child(3) {
      margin-bottom: 0;
    }
  }
`

const ProductImg = styled(Img)`
  overflow: hidden;
  transition: transform .2s ease-in-out;
  &:hover {
    transform: scale(1.15);
  }
`

const AccentButton = Button.extend`
  color: white;
  background-color: #181818;
  margin: 0 auto;
  position: relative;
`
const Container = styled.div`
  text-align: center;
  width: 100%;
  margin: 50px 0;
`

const Work = props => {
  const img1 = props.imageArray[1].node.childImageSharp
  return (
    <div>
      <Wrapper>
        <ProductItem>
          <ProductImg sizes={props.imageArray[1].node.childImageSharp.sizes} alt=""/> 
        </ProductItem>
        <ProductItem>
          <ProductImg sizes={props.imageArray[2].node.childImageSharp.sizes} alt=""/>
        </ProductItem>
        <ProductItem>
          <ProductImg sizes={props.imageArray[10].node.childImageSharp.sizes} alt=""/>
        </ProductItem>
        <ProductItem>
          <ProductImg sizes={props.imageArray[3].node.childImageSharp.sizes} alt=""/>
        </ProductItem>
        <ProductItem>
          <ProductImg sizes={props.imageArray[15].node.childImageSharp.sizes} alt=""/>
        </ProductItem>
        <ProductItem>
          <ProductImg sizes={props.imageArray[8].node.childImageSharp.sizes} alt=""/>
        </ProductItem>
      </Wrapper>
      <Container>
        <AccentButton>Посмотреть все работы</AccentButton>
      </Container>
    </div>
  )
}

export default Work
