import * as React from 'react'
import styled from '../../common/styled-components'

class OverlayView extends React.Component {

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
    background-color: rgba(0,0,0,0.3);
`

export default OverlayView
