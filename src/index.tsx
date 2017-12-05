import * as React from 'react'
import { AppRegistry } from 'react-native'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import store from './store'
import Router from './router'

useStrict(true)

const App = () => (
    <Provider {...store}>
        <Router />
    </Provider>
)

AppRegistry.registerComponent('ToDo', () => App);
