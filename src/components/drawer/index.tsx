import * as React from 'react'
import {
    View,
    Text
} from 'react-native'
import Header from './header'
import List from './list'

class DrawerContent extends React.Component {
    render() {
        return (
            <View>
                <Header/>
                <List/>
            </View>
        )
    }
}

export default DrawerContent