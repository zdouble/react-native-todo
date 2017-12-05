import * as React from 'react'
import styled from '../../common/styled-components'
import { Actions } from 'react-native-router-flux'
import { observer, inject } from 'mobx-react/native'

import { Text } from 'react-native';

import NoToDo from './no-todo'
import ToDo from './todo'
import Operate from '../../components/operate'

const addImage = require('../../images/ic_add.png')

@inject('ToDo')
@observer
class Home extends React.Component {
    render() {
        let { list:data } = this.props.ToDo
        return(
            <Container>
                {
                    data.length ? <ToDo data={data} /> : <NoToDo />
                }
                <Operate onPress={() => Actions.newToDo()} image={addImage} />
            </Container>
        )
    }
}

const Container = styled.View`
    flex: 1
`

export default Home