import * as React from 'react'
import { CheckBox } from 'react-native'
import styled from '../../common/styled-components'
import { observer, inject } from 'mobx-react/native'
import { Actions } from 'react-native-router-flux'

import ToDoType from '../../types/todo-type'

interface ToDoProps {
    ToDo?: any,
    data: ToDoType[]
}

@inject('ToDo')
class ToDo extends React.Component<ToDoProps, any> {
    renderItem = ({ item }: { item: ToDoType }) => {
        return (
            <ItemView onPress={() => this.itemPress(item.id)}>
                <CheckBox value={item.completed} onValueChange={(completed: boolean) => this.checkBoxChange(completed, item.id)} />
                <ItemText numberOfLines={2}>{item.title}</ItemText>
            </ItemView>
        )
    }

    itemPress = (id: string) => {
        Actions.detail({ id })
    }

    checkBoxChange = (completed: boolean, id: string) => {
        this.props.ToDo.setCompleted(id, completed)
    }

    keyExtractor = (item: ToDoType): string => item.id

    render() {
        return (
            <Container>
                <Title>All TO-DOs</Title>
                <FlatList
                    data={this.props.data}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </Container>
        )
    }
}

const Container = styled.View`
    flex: 1;
    padding-top: 10;
    padding-horizontal: 10;
`

const Title = styled.Text`
    font-size: 18;
    font-weight: bold;
    color: #000;
`

const FlatList = styled.FlatList`
    padding-horizontal: 10;
    margin-top: 10;
`

const ItemView = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding-vertical: 5;
`

const ItemText = styled.Text`
    font-size: 16;
    color: #000;
`


export default ToDo
