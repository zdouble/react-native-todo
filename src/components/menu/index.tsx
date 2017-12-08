import * as React from 'react'
import Overlay from '../overlay'
import MenuView from './menu-view'
class Menu extends Overlay {
    static show(options) {
        super.add(<MenuView {...options} />)
    }
}

export default Menu
