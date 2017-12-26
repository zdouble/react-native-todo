import * as React from 'react'
import { Text } from 'react-native'
import styled from '../../common/styled-components'

const message = {
    'all': {
        'text': 'You have no TO-DOs!',
        'image': require('../../images/ic_assignment.png')
    },
    'active': {
        'text': 'You have no active TO-DOs!',
        'image': require('../../images/ic_check.png')
    },
    'completed': {
        'text': 'You have no completed TO-DOs!',
        'image': require('../../images/ic_verified.png')
    }
}

interface NoToDoProps {
    type: 'all' | 'active' | 'completed'
}

const NoToDo: React.SFC<NoToDoProps> = ({type}) => (
    <Container>
        <ImageView source={message[type].image} />
        <Text>{message[type].text}</Text>
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
