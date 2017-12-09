import * as React from 'react'
import styled from '../../common/styled-components'

class NavBar extends React.Component {

    render() {
        return (
            <Container>
                <LeftView></LeftView>
                <CenterView></CenterView>
                <RightView></RightView>
            </Container>
        )
    }
}

const Container = styled.View`
   height: 40px;
   flex-direction: row;
`

const LeftView = styled.View`
    flex:1
`
const RightView = styled.View`
    flex:1
`
const CenterView = styled.View`
    flex:3
`

export default NavBar
