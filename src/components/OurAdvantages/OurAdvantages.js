import React from 'react'
import styled from 'styled-components'

import media from '../../utils/media'
import setTextColor from '../../utils/setTextColor'
import WoodSvg from './WoodSvg'

const Wrapper = styled.div`
  width: 100%;
  padding: 160px 20px;
  box-sizing: border-box;
  background-color: ${props =>
    (props.primaryBg && props.theme.primary) ||
    (props.lightBg && props.theme.light) ||
    (props.darkBg && props.theme.dark) ||
    props.theme.primary};
  color: ${props =>
    setTextColor(
      (props.primaryBg && props.theme.primary) ||
        (props.lightBg && props.theme.light) ||
        (props.darkBg && props.theme.dark) ||
        props.theme.primary
    )};
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 115px;
  line-height: 1.23;
  font-size: 36px;
  font-weight: 600;
  ${media.tablet`
    font-size: 28px;
  `};
`

const Container = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  font-size: 0;
  list-style: none;
`

const ItemContainer = styled.div`
  display: inline-block;
  *display: inline; /*for IE6 - IE7*/
  width: 33.33%;
  vertical-align: middle;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  ${media.phone`
    width: 100%;
  `};
`

const Item = styled.div`
  margin: 20px;
  display: block;
  position: relative;
  overflow: hidden;
  text-align: center;
  svg {
    width: 100px;
    height: 100px;
    margin-bottom: 25px;
  }
  .name {
    margin-bottom: 25px;
    margin-top: 12px;
    font-size: 18px;
    line-height: 1.35;
    font-weight: 500;
  }
  .description {
    font-size: 14px;
    line-height: 1.55;
    font-weight: 300;
  }
`

const OurAdvantages = props => (
  <Wrapper {...props}>
    <Title>Наши приемущества</Title>
    <Container>
      <ItemContainer>
        <Item>
          <WoodSvg />
          <div className="name">Материалы</div>
          <div className="description">
            Все наши изделия изготовлены из массива натурального дерева
          </div>
        </Item>
      </ItemContainer>
      <ItemContainer>
        <Item>
          <WoodSvg />
          <div className="name">Материалы</div>
          <div className="description">
            Все наши изделия изготовлены из массива натурального дерева
          </div>
        </Item>
      </ItemContainer>
      <ItemContainer>
        <Item>
          <WoodSvg />
          <div className="name">Материалы</div>
          <div className="description">
            Все наши изделия изготовлены из массива натурального дерева
          </div>
        </Item>
      </ItemContainer>
    </Container>
  </Wrapper>
)

export default OurAdvantages
