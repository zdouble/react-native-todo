import * as React from 'react'
import { AppRegistry } from 'react-native'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import stores from './stores'
import Router from './router'

useStrict(true)

const App = () => (
    <Provider {...stores}>
        <Router />
    </Provider>
)

AppRegistry.registerComponent('ToDo', () => App);
