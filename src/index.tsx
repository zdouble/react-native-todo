import * as React from 'react'
import { AppRegistry } from 'react-native'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import stores from './stores'
import Router from './router'
import Overlay from './components/overlay'

useStrict(true)

const App = () => (
    <Provider {...stores}>
        <Overlay>
            <Router />
        </Overlay>
    </Provider>
)

AppRegistry.registerComponent('ToDo', () => App);
