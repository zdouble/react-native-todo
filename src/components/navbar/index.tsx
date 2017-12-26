import * as React from 'react'
import styled from '../../common/styled-components'
import { Text } from 'react-native'

interface NavBarProps {
    rightView: JSX.Element[] | JSX.Element
    leftView: JSX.Element
    title: string
    leftPress: () => void
}

const NavBar: React.SFC<NavBarProps> = ({ leftPress, leftView, rightView, title}) => (
    <Container>
        <LeftView onPress={leftPress}>{leftView}</LeftView>
        <CenterView><Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>{title}</Text></CenterView>
        <RightView activeOpacity={1}>{rightView}</RightView>
    </Container>
)

const Container = styled.View`
   height: 55;
   flex-direction: row;
   background-color: #455a64;
`

const LeftView = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    padding-left: 10;
    flex-direction: row;
`
const RightView = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 10;
`
const CenterView = styled.View`
    flex: 3;
    justify-content: center;
`

export default NavBar
