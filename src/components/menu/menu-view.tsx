import * as React from 'react'
import OverlayView from '../overlay/overlay-view'
import styled from '../../common/styled-components'
import MenuItem from './menu-item'
import { Animated, Easing } from 'react-native'

class MenuView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            layoutAni: new Animated.Value(0),
        }
    }
    close = () => {
        this.props.close()
    }
    componentDidMount() {
        Animated.timing(this.state.layoutAni, {
            toValue: 1,
            duration: 300,
            easing: Easing.linear
        }).start()
    }

    hide = () => {
        Animated.timing(this.state.layoutAni, {
            toValue: 0,
            duration: 200,
            easing: Easing.linear
        }).start(() => this.close())
    }
    componentWillMount() {

    }
    render() {
        return (
            <OverlayView close={this.hide}>
                <Animated.View
                    style={[this.props.style, {
                        position: 'absolute',
                        minWidth: 150,
                        backgroundColor: '#fff'
                    }, { opacity: this.state.layoutAni }]}>
                    {
                        this.props.data.map((item, index) => <MenuItem key={index} close={this.close} {...item} />)
                    }
                </Animated.View>
            </OverlayView>
        )
    }
}

const Container = styled.View`
    min-width: 100;
    background-color: #fff;
`

export default MenuView
