import * as React from 'react'
import styled from '../../common/styled-components'
import { Actions } from 'react-native-router-flux'
import { observer, inject } from 'mobx-react/native'

import Edit from '../../components/edit'
import Operate from '../../components/operate'

const doneImage = require('../../images/ic_done.png')

interface DetailProps {
    ToDo: any,
    id: string
}

@inject('ToDo')
class Detail extends React.Component<DetailProps, any> {
    static onEnter = () => {
        Actions.refresh({
            rightTitle: 'DELETE TASK',
            onRight: () => {
                Actions.currentParams.deleteToDo()
                Actions.pop()
            }
        })
    }
    
    edit: Edit
    data: { title: string, content: string }

    onPress = () => {
        let { title, content } = this.edit.getContent()
        this.props.ToDo.updateToDo({
            id: this.props.id,
            title,
            content,
            completed: false
        })
        Actions.pop()
    }
    componentWillMount() {
        this.data = this.props.ToDo.getToDo(this.props.id)
        Actions.refresh({
            deleteToDo: () => {
                this.props.ToDo.deleteToDo(this.props.id)
            }
        })
    }
    render() {
        console.log(1)
        let { title, content } = this.data
        return (
            <Container>
                <Edit title={title} content={content} ref={ref => this.edit = ref as Edit} />
                <Operate onPress={this.onPress} image={doneImage} />
            </Container>
        )
    }
}

const Container = styled.View`
    flex: 1
`

export default Detail
