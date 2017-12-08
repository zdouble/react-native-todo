import * as React from 'react'
import { BackHandler } from 'react-native'
import { Router, Stack, Scene, Drawer, Overlay, Actions } from 'react-native-router-flux'

import Home from '../view/home'
import Statistics from '../view/statistics'
import DrawerContent from '../components/drawer'
import NewToDo from '../view/new-todo'
import Detail from '../view/detail'

const MenuIcon = require('../images/ic_menu.png')

const App = () => (
    <Router
        navigationBarStyle={{backgroundColor: '#455a64'}}
        titleStyle={{color: '#fff'}}
        leftButtonIconStyle={{width: 25, height: 25}}
        navBarButtonColor="#fff"
        backAndroidHandler={backHandle}
    >
        <Stack key="root">
            <Scene 
                key="drawerWrap" 
                hideNavBar
            >
                <Drawer
                    key="drawer"
                    contentComponent={DrawerContent}
                    drawerImage={MenuIcon}
                    drawerWidth={300}
                >
                    <Scene key="home" component={Home} hideNavBar />
                    <Scene key="statistics" component={Statistics} title="Statistics" />
                </Drawer>
            </Scene>
            <Scene key="newToDo" component={NewToDo} title="New TO-DO"  />
            <Scene key="detail" component={Detail} title="ToDo" />
        </Stack>
    </Router>
)

const backHandle = () => {
    if (Actions.state.index === 0) {
        BackHandler.exitApp()
        return false
    }
    Actions.pop()
    return true
}

export default App
