import * as React from 'react'
import { Text } from 'react-native'
import styled from '../../common/styled-components'

const assignment = require('../../images/ic_assignment.png')

const NoToDo = () => (
    <Container>
        <ImageView source={assignment} />
        <Text>You have no TO-DOs!</Text>
    </Container>
)

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const ImageView = styled.Image`
    width: 50;
    height: 50;
`

export default NoToDo
