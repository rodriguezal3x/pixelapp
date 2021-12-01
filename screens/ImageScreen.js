import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageScreen = ({ route}) => {
    const { image } = route.params;

    return (
        <View>
            <Image source={{ uri: image.src.medium,  height:350}} 
            />
        </View>
    )
}

export default ImageScreen
