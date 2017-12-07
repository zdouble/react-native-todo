import * as React from 'react'
import styled from '../../common/styled-components'
import { Actions } from 'react-native-router-flux'
import { observer, inject } from 'mobx-react/native'

import Edit from '../../components/edit'
import Operate from '../../components/operate'

const doneImage = require('../../images/ic_done.png')

interface NewToDoProps {
    ToDo: any
}

@inject('ToDo')
class NewToDo extends React.Component<NewToDoProps, any> {
    edit: Edit

    onPress = () => {
        let { title, content } = this.edit.getContent()
        this.props.ToDo.addToDo({
            id: Date.now(),
            title,
            content,
            completed: false
        })
        Actions.pop()
    }
    render() {
        return (
            <Container>
                <Edit ref={ref => this.edit = ref as Edit} />
                <Operate onPress={this.onPress} image={doneImage} />
            </Container>
        )
    }
}

const Container = styled.View`
    flex: 1
`

export default NewToDo
