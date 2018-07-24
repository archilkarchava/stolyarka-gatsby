import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 150px;
  padding-bottom: 150px;
  position: relative;
  text-align: center;
  font-size: 30px;
`

const TextBlock = ({ textData }) => (
  <Wrapper>
    { textData }
  </Wrapper>
)

export default TextBlock
