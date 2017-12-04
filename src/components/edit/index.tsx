import * as React from 'react'
import styled from '../../common/styled-components'
import { View, KeyboardAvoidingView } from 'react-native'

interface contentType {
    title: string
    content: string
}

class Edit extends React.Component {
    title:string = ''
    content:string = ''
    _onContentSizeChange = ({ nativeEvent: { contentSize: { width, height } } }) => {
        setTimeout(() => {
            this.scroll.scrollTo({ y: Math.max(0, height - 200) })
        })
    }

    onChangeTitle = (text: string): void => {
        this.title = text
    }

    onChangeContent = (text: string): void => {
        this.content = text
    }

    getContent = (): contentType => {
        return {
            title: this.title,
            content: this.content
        }
    }
    
    render() {
        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={{flex:1}}
            >
                <Container>
                    <Input
                        onChangeText={this.onChangeTitle}
                        placeholder="Title" />
                    <Wrap>
                        <ScrollView
                            innerRef={ref => { this.scroll = ref }}
                            showsVerticalScrollIndicator
                        >
                            <TextArea
                                autoGrow
                                multiline
                                onContentSizeChange={this._onContentSizeChange}
                                onChangeText={this.onChangeContent}
                                placeholder="Enter your TO-DO here." />
                        </ScrollView>
                    </Wrap>
                </Container>
            </KeyboardAvoidingView>
        )
    }
}

const Container = styled.View`
    flex: 1;
    paddingVertical: 10;
    paddingHorizontal: 5;
`
const Input = styled.TextInput`
    font-size: 16;
`
const Wrap = styled.View`
    height: 250;
`
const TextArea = Input.extend`
    height: 250;
    textAlignVertical: top;
`
const ScrollView = styled.ScrollView`
    flex: 1;
`
export default Edit