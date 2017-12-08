import * as React from 'react'
import styled from '../../common/styled-components'

class ToastView extends React.Component {
    timer: number

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.props.close()
        }, 3000)
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render() {
        return (
            <Container>
                <TextView>
                    <Text>{this.props.text}</Text>
                </TextView>
            </Container>
        )
    }
}

const Container = styled.View`
    align-items: center;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    padding: 30px;
    justify-content: flex-end;
    
`
const TextView = styled.View`
    padding: 10px;
    min-width: 100;
    background-color: rgba(0,0,0,0.3);
    border-radius: 8;
    align-items: center;
`

const Text = styled.Text`
    color: #fff
`

export default ToastView
