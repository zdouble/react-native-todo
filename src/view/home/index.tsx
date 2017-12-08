import * as React from 'react'
import styled from '../../common/styled-components'
import { Actions } from 'react-native-router-flux'
import { observer, inject } from 'mobx-react/native'

import { View, Text } from 'react-native';

import NoToDo from './no-todo'
import ToDo from './todo'
import Operate from '../../components/operate'

import Overlay from '../../components/overlay'
import Toast from '../../components/toast'
import Menu from '../../components/menu'

import ToDoType from '../../types/todo-type'

const addImage = require('../../images/ic_add.png')

interface HomeProps {
    ToDo: any
}

@inject('ToDo')
@observer
class Home extends React.Component<HomeProps, any> {
    // static onEnter = () => {
    //     Actions.refresh({
    //         rightTitle: '342423'
    //     })
    // }
    
    static onEnter = () => {
        Actions.statistics()
    }
    newToDo() {
        Actions.newToDo()

        Menu.show({
            style: {
                right: 0,
                bottom: 0
            },
            data: [
                {
                    text: '1',
                    onPress: (text) => {
                        alert(text)
                    }
                },
                {
                    text: '2',
                    onPress: (text) => {
                        alert(text)
                    }
                },
                {
                    text: '3',
                    onPress: (text) => {
                        alert(text)
                    }
                }
            ]
        })
    }
    render() {
        let { list: data } = this.props.ToDo
        return (
            <Container>
                {
                    data.length ? <ToDo data={data} /> : <NoToDo />
                }
                <Operate onPress={this.newToDo} image={addImage} />
            </Container>
        )
    }
}

const Container = styled.View`
    flex: 1
`

export default Home