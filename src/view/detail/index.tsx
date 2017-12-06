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
    }
    render() {
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
