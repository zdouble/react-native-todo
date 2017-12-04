import * as React from 'react'
import {
    View,
    Text
} from 'react-native'
import styled from '../../common/styled-components'

const NoTask = () => (
    <NoTaskText>You have no takes</NoTaskText>
)

const NoTaskText = styled.Text`
    font-size: 16
`

class Statistics extends React.Component {
    render() {
        return (
            <Container>
                <NoTask/>
            </Container>
        )
    }
}

const Container = styled.View`
    padding-left: 10;
    padding-top: 20;
`

export default Statistics