import * as React from 'react'
import styled from '../../common/styled-components'
import { Actions } from 'react-native-router-flux'

import NoToDo from './no-todo'
import Operate from '../../components/operate'

const addImage = require('../../images/ic_add.png')

class Home extends React.Component {
    render() {
        return(
            <Container>
                <NoToDo />
                <Operate onPress={() => Actions.newToDo()} image={addImage} />
            </Container>
        )
    }
}

const Container = styled.View`
    flex: 1
`

export default Home