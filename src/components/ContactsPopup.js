import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const Form = styled.form`
  z-index: 999;
  position: fixed;
  left: 50%;
  top: 50%;
  * {
    display: block;
  }
  transition: opacity 0.3s ease-in-out;
  opacity: ${props => (props.show ? '1' : '0')};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
`

const ContactsPopup = props => {
  return (
    <Form
      show={props.show}
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="text" />
      <input type="text" />
      <input type="tel" />
      <Button primary rounded>
        Отправить
      </Button>
    </Form>
  )
}

export default ContactsPopup
