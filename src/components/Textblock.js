import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 150px 20px;
  position: relative;
  text-align: center;
  font-size: 30px;
`

const TextBlock = ({ textData }) => (
  <Wrapper>
    { textData }
  </Wrapper>
)

export def