import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Overlay from '../overlay'
import ToastView from './toast-view'

class Toast extends Overlay {
    static show(text) {
        super.add(<ToastView text={text} />)
    }
}

export default Toast
