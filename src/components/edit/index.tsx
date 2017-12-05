import * as React from 'react'
import styled from '../../common/styled-components'

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
            <Container keyboardShouldPersistTaps>
                <Input
                    onChangeText={this.onChangeTitle}
                    placeholder="Title" />
                <Wrap>
                    <ScrollView
                        keyboardShouldPersistTaps
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
        )
    }
}

const Container = styled.ScrollView`
    paddingVertical: 10;
    paddingHorizontal: 5;
`
const Input = styled.TextInput`
    font-size: 16;
`
const Wrap = styled.View`
    height: 200;
`
const TextArea = Input.extend`
    height: 200;
    textAlignVertical: top;
`
const ScrollView = styled.ScrollView`
    flex: 1;
`
export default Edit