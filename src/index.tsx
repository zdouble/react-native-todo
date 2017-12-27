import * as React from 'react'
import { AppRegistry } from 'react-native'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import stores from './stores'
import Router from './router'
import Overlay from './components/overlay'
import * as store from 'react-native-simple-store'
import ToDoType from './types/todo-type'
store.get('todoList').then((res: ToDoType[]) => stores.ToDo.initList(res))

useStrict(true)

const App = () => (
    <Provider {...stores}>
        <Overlay>
            <Router />
        </Overlay>
    </Provider>
)

AppRegistry.registerComponent('ToDo', () => App);
