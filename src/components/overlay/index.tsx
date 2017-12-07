import * as React from 'react';
import { View, Text, StyleSheet, DeviceEventEmitter } from 'react-native';

class Overlay extends React.Component {

    static add(e) {
        DeviceEventEmitter.emit('add', e)
    }

    static remove(key: number) {
        DeviceEventEmitter.emit('remove', key)
    }

    key: number = 0

    state = {
        elements: []
    }



    componentWillMount() {
        DeviceEventEmitter.addListener('add', (e) => this.add(e))
        DeviceEventEmitter.addListener('remove', (key) => this.remove(key))
    }

    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners()
    }

    remove = (key: number) => {
        let elements = this.state.elements.filter(item => item.key !== key)
        this.setState({
            elements
        })
    }

    add = (element) => {
        this.key++
        let elements = this.state.elements
        element = React.cloneElement(element, {
            key: this.key,
            close: this.remove,
            overlayKey: this.key
        })
        elements.push({
            key: this.key,
            element
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
