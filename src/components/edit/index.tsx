import * as React from 'react'
import styled from '../../common/styled-components'
import { ScrollView } from 'react-native'

interface EditProps {
    title?: string
    content?: string
}

class Edit extends React.Component<EditProps, any> {

    static defaultProps = {
        title: '',
        content: ''
    }

    title: string = ''
    content: string = ''
    scroll: ScrollView

    _onContentSizeChange = ({ nativeEvent: { contentSize: { width, height } } }: { nativeEvent: { contentSize: { width: number, height: number } } }) => {
        setTimeout(() => {
            this.scroll.scrollTo({ y: Math.max(0, height - 200) })
        })
    }

    onChangeTitle = (text: string) => {
        this.title = text
    }

    onChangeContent = (text: string) => {
        this.content = text
    }

    getContent = (): EditProps => {
        return {
            title: this.title,
            content: this.content
        }
    }


    componentWillMount() {
        this.title = this.props.title as string
        this.content = this.props.content as string
    }


    render() {
        return (
            <Container keyboardShouldPersistTaps>
                <Input
                    defaultValue={this.title}
                    onChangeText={this.onChangeTitle}
                    placeholder="Title" />
                <Wrap>
                    <TextScrollView
                        keyboardShouldPersistTaps
                        innerRef={ref => { this.scroll = ref }}
                        showsVerticalScrollIndicator
                    >
                        <TextArea
                            autoGrow
                            multiline
                            defaultValue={this.content}
                            onContentSizeChange={this._onContentSizeChange}
                            onChangeText={this.onChangeContent}
                            placeholder="Enter your TO-DO here." />
                    </TextScrollView>
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
let TextScrollView = styled.ScrollView`
    flex: 1;
`
export default Edit
