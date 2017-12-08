import * as React from 'react'
import OverlayView from '../overlay/overlay-view'
import styled from '../../common/styled-components'
import MenuItem from './menu-item'

class MenuView extends React.Component {
    close = () => {
        this.props.close()
    }
    render() {
        return (
            <OverlayView close={this.close}>
                <Container style={this.props.style}>
                    {
                        this.props.data.map((item, index) => <MenuItem key={index} close={this.close} {...item} />)
                    }
                </Container>
            </OverlayView>
        )
    }
}

const Container = styled.View`
    position:absolute;
    min-width: 100;
    background-color: #fff;
`

export default MenuView
