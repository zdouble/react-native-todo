import * as React from 'react'
import styled from '../../common/styled-components'
import { Actions } from 'react-native-router-flux'
import {
    Text,
    ImageURISource,
    TouchableOpacity
} from 'react-native'

const listIcon = require('../../images/ic_list.png')
const statisticsIcon = require('../../images/ic_statistics.png')

interface ItemProps {
    icon: ImageURISource | number;
    text: string;
    onPress: () => void;
}

const Item: React.SFC<ItemProps> = ({ icon, text, onPress }) => (
    <ItemContainer onPress={onPress}>
        <ImageView source={icon} />
        <Text>{text}</Text>
    </ItemContainer>
)


const List = () => (
    <Container>
        <Item icon={listIcon} text="TO-DO List" onPress={() => Actions.home()}/>
        <Item icon={statisticsIcon} text="Statistics" onPress={() => Actions.statistics()}/>
    </Container>
)

const Container = styled.View`
    background-color: #fff;
`
const ItemContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    height: 50;
    padding-left: 20;
`
const ImageView = styled.Image`
    width: 30;
    height: 30;
    margin-right: 20;
`
const TextView = styled.Text`
    color: #fff
`

export default List
