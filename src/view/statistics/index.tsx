import * as React from 'react'
import styled from '../../common/styled-components'
import { observer, inject } from 'mobx-react/native'

const NoTask = () => (
    <TaskBaseText>You have no takes</TaskBaseText>
)

const TaskBaseText = styled.Text`
    font-size: 16
`

const Task = ({ completedCount, activeCount }) => (
    [
        <TaskBaseText>Active task:{activeCount}</TaskBaseText>,
        <TaskBaseText>Completed task:{completedCount}</TaskBaseText>
    ]
)


@inject('ToDo')
@observer
class Statistics extends React.Component {
    render() {
        let { completedCount, activeCount } = this.props.ToDo
        return (
            <Container>
                {
                    (completedCount || activeCount) ?
                        <Task completedCount={completedCount} activeCount={activeCount} />
                        : <NoTask />
                }
            </Container>
        )
    }
}

const Container = styled.View`
    padding-left: 10;
    padding-top: 20;
`

export default Statistics
