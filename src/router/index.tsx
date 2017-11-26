import * as React from 'react'
import { Router, Stack, Scene, Drawer } from 'react-native-router-flux'
import Home from '../view/home'
import Statistics from '../view/statistics'
import DrawerContent from '../components/drawer'
const MenuIcon = require('../images/menu_burger.png') 
const App = () => (
    <Router>
        <Drawer
            key="drawer"
            contentComponent={DrawerContent}
            drawerImage={MenuIcon}
            drawerWidth={300}
        >
            <Scene key="home" component={Home} title="ToDo" navigationBarStyle={{ backgroundColor: 'red' }} />
            <Scene key="statistics" component={Home} title="Statistics" />
        </Drawer>
    </Router>
)

export default App