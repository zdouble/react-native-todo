import * as React from 'react';
import { ImageURISource } from 'react-native'
import styled from '../../common/styled-components'



interface OperateProps {
    image: ImageURISource | number;
    onPress: () => void;
}

const Operate: React.SFC<OperateProps> = ({image, onPress}) => (
    <Container onPress={onPress}>
        <ImageView source={image} />
    </Container>
)

const Container = styled.TouchableOpacity`
    position: absolute;
    background-color: red;
    width: 50;
    height: 50;
    border-radius: 25;
    justify-content: center;
    align-items: center;
    bottom: 20;
    right: 20;
`

const ImageView = styled.Image`
    width: 40;
    height: 40;
`

export default Operate;
