import React from 'react'
import styled from 'styled-components'

import SocialLinks from './SocialLinks'

import media from '../utils/media';
import setTextColor from '../utils/setTextColor'
import YandexMap from './YandexMap';
import staticMapImg from '../images/staticMap.png'

const Wrapper = styled.div`
  background-color: ${props =>
    (props.primary && props.theme.primary) ||
    (props.accent && props.theme.accent) ||
    props.theme.accent
  };
  height: 600px;
  overflow: hidden;
  &::after{
    content: "";
    display: table;
    clear: both;
  }
`

const ContactBoxWrapper = styled.div`
  background-color: ${props =>
    (props.primary && props.theme.primary) ||
    (props.accent && props.theme.accent) ||
    props.theme.accent
  };
  float: left;
  width: 50%;
  height: 100%;
  ${media.tablet`
    width: 100%;
    height: 50%;
  `}
`

const ContactBox = styled.div`
  margin: 147px 100px;
  max-width: 470px;
  padding: 20px;
  background-color: ${props =>
    (props.primary && props.theme.primary) ||
    (props.accent && props.theme.accent) ||
    props.theme.accent
  };
  &, a {
    color: ${props => setTextColor(
    (props.primary && props.theme.primary) ||
    (props.accent && props.theme.accent) ||
    props.theme.accent
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
    margin: 0 20px;
    max-width: 350px;
  `}
  ${media.phone`
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
  @media screen and (min-width:0\0) {
    /* target IE9 and IE10 specifically to show an image instead of interactive map  */
    background-image: url(${staticMapImg});
    background-position: center center;
    background-size: cover;
    height: 100%;
  }
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