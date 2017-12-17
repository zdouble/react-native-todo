import * as React from 'react'
import styled from '../../common/styled-components'

class MenuItem extends React.Component {

    onPress = () => {
        this.props.onPress(this.props.text)
        this.props.close()
    }

    render() {
        return (
            <Container activeOpacity={1} onPress={this.onPress}>
                <ItemText>{this.props.text}</ItemText>
            </Container>
        )
    }
}

const Container = styled.TouchableOpacity`
    height: 50;
    padding: 0 10px;
    justify-content: center;
    border-style: solid;
    border-color: #eee;
`
const ItemText = styled.Text`
`

export default MenuItem
