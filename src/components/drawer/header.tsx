import * as React from 'react'
import styled from '../../common/styled-components'

const logo = require('../../images/logo.png')

const Header = () => (
    <Container>
        <ImageView source={logo}/>
        <TextView>TO-DOs</TextView>
    </Container>
)

const Container = styled.View`
    background-color: #263238;
    height: 200;
    justify-content: center;
    align-items: center;
`
const ImageView = styled.Image`
    width: 100;
    height: 100;
    margin-bottom: 10
`
const TextView = styled.Text`
    color: #fff
`

export default Header