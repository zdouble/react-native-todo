import * as React from 'react'
import { Router, Stack, Scene, Drawer, Overlay } from 'react-native-router-flux'
import { Image } from 'react-native'
import Home from '../view/home'
import Statistics from '../view/statistics'
import DrawerContent from '../components/drawer'
import NewToDo from '../view/new-todo'
const MenuIcon = require('../images/ic_menu.png')
const App = () => (
    <Router
        navigationBarStyle={{backgroundColor: '#455a64'}}
        titleStyle={{color: '#fff'}}
        leftButtonIconStyle={{width: 25, height: 25}}
        navBarButtonColor="#fff"
    >
        <Stack key="root">
            <Scene 
                key="drawerWrap" 
                hideNavBar>
                <Drawer
                    key="drawer"
                    contentComponent={DrawerContent}
                    drawerImage={MenuIcon}
                    drawerWidth={300}
                >
                    <Scene key="home" component={Home} title="ToDo" />
                    <Scene key="statistics" component={Statistics} title="Statistics" />
                </Drawer>
            </Scene>
            <Scene key="newToDo" component={NewToDo} title="New TO-DO" />
        </Stack>
    </Router>
)

export default App