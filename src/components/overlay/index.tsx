import * as React from 'react';
import { View, Text, StyleSheet, DeviceEventEmitter } from 'react-native';

interface OverlayState {
    elements: {
        element:JSX.Element,
        overlayKey: number
    }[]
}

class Overlay extends React.Component<{}, OverlayState> {

    static add(e: JSX.Element) {
        DeviceEventEmitter.emit('add', e)
    }

    static remove(key: number) {
        DeviceEventEmitter.emit('remove', key)
    }

    key: number = 0

    constructor(props){
        super(props)
        this.state = {
            elements: []
        }
    }

    componentWillMount() {
        DeviceEventEmitter.addListener('add', (e) => this.add(e))
        DeviceEventEmitter.addListener('remove', (key) => this.remove(key))
    }

    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners()
    }

    remove = (key: number) => {
        let elements = this.state.elements.filter(item => item.overlayKey !== key)
        this.setState({
            elements
        })
    }

    add = (element:JSX.Element) => {
        this.key++
        let elements = this.state.elements
        element = React.cloneElement(element, {
            key: this.key,
            close: this.remove,
            overlayKey: this.key
        })
        elements.push({
            element,
            overlayKey: this.key
        })
        this.setState({
            elements
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
                {this.state.elements.map(item => item.element)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Overlay
