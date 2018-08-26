import React from 'react'
import styled from 'styled-components'

import SocialLinks from './SocialLinks'

import media from '../utils/media'
import setTextColor from '../utils/setTextColor'
import YandexMap from './YandexMap'
import staticMapImg from '../data/images/staticMap.png'

const Wrapper = styled.div`
  background-color: ${props =>
    (props.primaryBg && props.theme.primary) ||
    (props.lightBg && props.theme.light) ||
    (props.darkBg && props.theme.dark) ||
    props.theme.dark};
  height: 600px;
  overflow: hidden;
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`

const ContactBoxWrapper = styled.div`
  float: left;
  width: 50%;
  height: 100%;
  ${media.tablet`
    width: 100%;
    height: 50%;
    padding: 20px 0;
  `};
`

const ContactBox = styled.div`
  margin: 147px 100px;
  max-width: 470px;
  padding: 20px;
  &, a {
    color: ${props =>
      setTextColor(
        (props.primaryBg && props.theme.primary) ||
          (props.lightBg && props.theme.light) ||
          (props.darkBg && props.theme.dark) ||
          props.theme.dark
      )};
  }
  h1 {
    font-size: 40px;
    line-height: 1.17;
    margin-bottom: 60px;
    text-transform: uppercase;
    font-weight: 700;
  }
  ul {
    list-style:none;
    margin-bottom: 60px;
  }
  li {
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: 400;
  }
  ${media.laptop`
    margin: 147px 50px;
  `}
  ${media.tablet`
    h1 {
      font-size: 30px;
      margin-bottom: 40px;
    }
    ul {
      margin-bottom: 40px;
    }
    li {
      font-size: 18px;
    }
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
    padding: 0 40px;
    max-width: 350px;
  `}
  ${media.phone`
    padding: 0 20px;
    h1 {
      margin-bottom: 30px;
    }
    li {
      margin-bottom: 10px;
    }
    ul {
      margin-bottom: 30px;
    }
  `}
`

const MapWrapper = styled.div`
  float: left;
  width: 50%;
  height: 100%;
  ${media.tablet`
    width: 100%;
    height: 50%;
  `}
  background-image: url(${staticMapImg});
  background-position: center center;
  background-size: cover;
  height: 100%;
`

const ContactUs = props => (
  <Wrapper {...props}>
    <ContactBoxWrapper {...props}>
      <ContactBox {...props}>
        <h1>Свяжитесь с нами</h1>
        <ul>
          <li>
            <p>
              <a href="tel:+7 (900) 000-00-00">+7 (900) 000 00 00</a>
            </p>
          </li>
          <li>
            <p>
              <a href="mailto:lesdoska@list.ru">lesdoska@list.ru</a>
            </p>
          </li>
          <li>
            <p>Челябинск, ул. Блюхера 91</p>
          </li>
        </ul>
        <SocialLinks />
      </ContactBox>
    </ContactBoxWrapper>
    <MapWrapper>
      <YandexMap />
    </MapWrapper>
  </Wrapper>
)

export default ContactUs
