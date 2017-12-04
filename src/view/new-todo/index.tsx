import * as React from 'react'
import styled from '../../common/styled-components'
import { Actions } from 'react-native-router-flux'

import Edit from '../../components/edit'
import Operate from '../../components/operate'

const doneImage = require('../../images/ic_done.png')

class NewToDo extends React.Component {
    render() {
        return (
            <Container>
                <Edit/>
                <Operate onPress={() => Actions.test()} image={doneImage} />
            </Container>
        )
    }
}

const Container = styled.View`
    flex: 1
`

export default NewToDo