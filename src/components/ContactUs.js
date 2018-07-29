import React from 'react'
import styled from 'styled-components'

import vk from '../images/vk.svg'
import instagram from '../images/instagram.svg'
import media from './media';

const Wrapper = styled.div`
  width: 100%;
  height: 650px;
  position: relative;
  background-color: ${props =>
    (props.primary && props.theme.primary) ||
    (props.secondary && props.theme.secondary) ||
    props.theme.primary
  };
`

const ContactBox = styled.div`
  text-align: center;
  padding: 0px 20px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  h1 {
    text-align: center;
    margin-bottom: 60px;
  }
  ul {
    list-style:none;
    margin-bottom: 45px;
  }
  li {
    margin-bottom: 10px;
  }
  ${media.tablet`
    h1 {
      margin-bottom: 35px;
    }
    ul {
      margin-bottom: 27px;
    }
  `}
`

const SocialLinks = styled.div`
  position: relative;
  img {
    display: inline-block;
    margin: 0 5px;
    height: 28px;
  }
`

const ContactUs = props => (
  <Wrapper {...props}>
    <ContactBox>
      <h1>Свяжитесь с нами</h1>
      <ul>
        <li>
          <p>E-mail: <a href="mailto:lesdoska@list.ru">lesdoska@list.ru</a></p>
        </li>
        <li>
          <p>Телефон: <a href="tel:+7 (900) 000-00-00">+7 (900) 000 00 00</a></p>
        </li>
        <li>
          <p>Челябинск, ул. Блюхера 91</p>
        </li>
      </ul>
      <SocialLinks>
        <a target="_blank" rel="noopener noreferrer" href="https://vk.com/"><img src={vk} alt="vk" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/"><img src={instagram} alt="instagram" /></a>
      </SocialLinks>
    </ContactBox>
  </Wrapper>
)

export default ContactUs
