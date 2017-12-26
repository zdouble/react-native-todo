import * as React from 'react'
import styled from '../../common/styled-components'
import { BackHandler } from 'react-native'

interface OverlayViewProps {
    close?: () => void,
    text?: string
}
class OverlayView extends React.Component<OverlayViewProps,any> {

    handler: any

    componentWillMount() {
        this.handler = BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.close && this.props.close()
            return true
        })
    }

    componentWillUnmount () {
        this.handler.remove()
    }
    
    render() {
        return (
            <Container activeOpacity={1} onPress={this.props.close}>
                {this.props.children}
            </Container>
        )
    }
}

const Container = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0);
`

export default OverlayView
