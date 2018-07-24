import React from 'react'
import styled from 'styled-components'

import vk from '../images/vk.svg'
import instagram from '../images/instagram.svg'

const Wrapper = styled.div`
  height: 290px;
  padding-top: 180px;
  padding-bottom: 180px;
  width: 100%;
  position: relative;
  background: #f0f0f0;
`

const ContactBox = styled.div`
  text-align: center;
  height: 267px;
  margin: auto;
  position: absolute;
  overflow: hidden;
  top: 0; left: 0; bottom: 0; right: 0;
  h1 {
    color: black;
    text-align: center;
  }
  ul {
    list-style:none;
    margin: 57px 0;
  }
  li {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 368px) {
    height: 311px;
  }
`

const SocialLinks = styled.div`
  margin-top: 10px;
  position: relative;
  img {
    display: inline-block;
    margin: 0 5px;
    height: 28px;
  }
`

const ContactUs = () => (
  <Wrapper>
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
        <a target="_blank" rel="noopener noreferrer" href="https://vk.com/"><img src={vk} alt="vk"/></a>
        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/"><img src={instagram} alt="instagram"/></a>
      </SocialLinks>
    </ContactBox>
  </Wrapper>
)

export default ContactUs
