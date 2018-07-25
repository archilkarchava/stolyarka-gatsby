import styled from 'styled-components'

const Anchor = styled.a`
    display: block;
    position: relative;
    top: -80px;
    visibility: hidden;
    @media screen and (max-width: 900px) {
        top: -65px
    }
`

export default Anchor
