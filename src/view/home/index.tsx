import * as React from 'react'
import styled from '../../common/styled-components'
import { Actions } from 'react-native-router-flux'
import { observer, inject } from 'mobx-react/native'
import { observable,action } from 'mobx'
import { Image, TouchableOpacity } from 'react-native'

import { View, Text } from 'react-native';

import NoToDo from './no-todo'
import ToDo from './todo'
import Operate from '../../components/operate'
import Navbar from '../../components/navbar'

import Overlay from '../../components/overlay'
import Toast from '../../components/toast'
import Menu from '../../components/menu'

import ToDoType from '../../types/todo-type'

const addImage = require('../../images/ic_add.png')
const MenuIcon = require('../../images/ic_menu.png')
const MoreIcon = require('../../images/ic_more.png')
const FilterIcon = require('../../images/ic_filter_list.png')

interface HomeProps {
    ToDo: any
}

type filterType = 'all' | 'active' | 'completed'

@inject('ToDo')
@observer
class Home extends React.Component<HomeProps, any> {
    @observable filterType: filterType  = 'all'
    @action changeFilterType(type: filterType) {
        this.filterType = type
    }
    newToDo = () => {
        Actions.newToDo()
    }
    leftView = () => {
        return <Image source={MenuIcon} style={{ width: 25, height: 25 }} />
    }
    rightView = () => {
        return [
            <TouchableOpacity
                key="filter"
                onPress={() => Menu.show({
                    style: { top: 50, right: 0 },
                    data: [
                        { text: 'All', onPress: () => { this.changeFilterType('all') } },
                        { text: 'Active', onPress: () => { this.changeFilterType('active') } },
                        { text: 'Completed', onPress: () => { this.changeFilterType('completed') } }
                    ]
                })}
            >
                <Image source={FilterIcon} style={{ width: 25, height: 25 }} />
            </TouchableOpacity>,
            <TouchableOpacity
                style={{ marginLeft: 15 }}
                key="more"
                onPress={() => Menu.show({
                    style: { top: 0, right: 0 },
                    data: [
                        { text: 'Clear completed', onPress: () => this.props.ToDo.clearToDo() }
                    ]
                })}
            >
                <Image source={MoreIcon} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
        ]
    }
    
    render() {
        let { list: data } = this.props.ToDo
        if (this.filterType == 'active'){
            data = data.filter((item:ToDoType) => !item.completed)
        } else if (this.filterType == 'completed') {
            data = data.filter((item:ToDoType) => item.completed)
        }
        return (
            <Container>
                <Navbar
                    title="TODO"
                    leftView={this.leftView()}
                    rightView={this.rightView()}
                    leftPress={() => Actions.drawerOpen()}
                />
                {
                    data.length ? <ToDo data={data} /> : <NoToDo type={this.filterType} />
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