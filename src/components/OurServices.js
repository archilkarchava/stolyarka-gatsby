import React from 'react'
import styled from 'styled-components'

import BackgroundImg from './BackgroundImg'

import setTextColor from '../utils/setTextColor'
import media from '../utils/media'

const Wrapper = styled.div`
  width: 100%;
  height: 567px;
`

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  ${props =>
    props.bgImg
      ? `
        color: #ffffff;
        background-color: transparent !important;
        z-index: 3;
      `
      : `
      background-color: ${(props.primaryBg && props.theme.primary) ||
        (props.lightBg && props.theme.light) ||
        (props.darkBg && props.theme.dark) ||
        props.theme.primary};
      color: ${setTextColor(
        (props.primaryBg && props.theme.primary) ||
          (props.lightBg && props.theme.light) ||
          (props.darkBg && props.theme.dark) ||
          props.theme.primary
      )};
    `};
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 80px;
  line-height: 1.23;
  font-size: 36px;
  font-weight: 600;
  ${media.tablet`
    font-size: 28px;
  `};
`

const List = styled.ul`
  list-style: none;
  text-align: center;
  li {
    margin-bottom: 10px;
  }
`

const OurServices = props => {
  return (
    <Wrapper>
      {props.bgImg && (
        <BackgroundImg
          style={{
            height: '567px',
          }}
          alt="Наши услуги. Фоновое изображение"
          fluid={props.bgImg.fluid}
          zIndex={1}
          {...props}
        />
      )}
      <Container {...props}>
        <Title>Делаем на заказ</Title>
        <List>
          <li>Столы</li>
          <li>Стулья</li>
          <li>Лестницы</li>
          <li>Еще что-то</li>
          <li>И что-нибудь еще</li>
          <li>Много чего на самом деле</li>
          <li>Еще что-нибудь</li>
        </List>
      </Container>
    </Wrapper>
  )
}

export default OurServices
