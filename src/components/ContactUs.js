import React from 'react'
import styled from 'styled-components'

import SocialLinks from './SocialLinks'

import media from '../utils/media';
import setTextColor from '../utils/setTextColor'
import Map from './Map';

const Wrapper = styled.div`
  background-color: ${props => props.theme.brandBlack};
  width: 100%;
  height: 650px;
  position: relative;
`

const ContactBoxWrapper = styled.div`
  background-color: ${props => props.theme.brandBlack};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  max-width: 1160px;
  z-index: 1;
  ${media.desktop`
    max-width: 940px;
  `}
  ${media.laptop`
    width: 100%;
    position: initial;
  `}
`

const ContactBox = styled.div`
  background-color: ${props => props.theme.brandBlack};
  color: ${props => setTextColor(props.theme.brandBlack)};
  a {
    color: ${props => setTextColor(props.theme.brandBlack)};
  }
  top: 120px;
  position: absolute;
  min-height: 300px;
  padding: 60px;
  box-sizing: border-box;
  h1 {
    font-size: 32px;
    line-height: 1.17;
    margin-bottom: 30px;
    text-transform: uppercase;
    font-weight: 700;
    ${media.desktop`
      font-size: 30px;
    `}
  }
  ul {
    list-style:none;
    margin-bottom: 30px;
  }
  li {
    font-size: 17px;
    line-height: 1.7;
    font-weight: 400;
    ${media.desktop`
      font-size: 15px;
    `}
  }
  ${media.desktop`
    max-width: 355px;
  `}
  ${media.laptop`
    max-width: initial;
    position: initial;
    text-align: center;
    padding: 45px 20px;
    min-height: auto;
  `}
`

const MapWrapper = styled.div`
  height: 100%;
  ${media.laptop`
    height: 55%;
  `}
`

const ContactUs = props => (
  <Wrapper {...props}>
    <ContactBoxWrapper>
      <ContactBox>
        <h1>Свяжитесь с нами</h1>
        <ul>
          <li>
            <a href="tel:+7 (900) 000-00-00">+7 (900) 000 00 00</a>
          </li>
          <li>
            <a href="mailto:lesdoska@list.ru">lesdoska@list.ru</a>
          </li>
          <li>
            <p>Челябинск, ул. Блюхера 91</p>
          </li>
        </ul>
        <SocialLinks />
      </ContactBox>
    </ContactBoxWrapper>
    <MapWrapper>
      <Map
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA9N9nZnV5nECOLRyZY4byO5H5ZUlMPf_I&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </MapWrapper>
  </Wrapper>
)

export default ContactUs