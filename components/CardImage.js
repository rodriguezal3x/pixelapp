import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core';

const CardImage = ({ image }) => {
    const navigation = useNavigation()


    return (
        <TouchableOpacity 
            style={style.CardImage} 
            onPress={() => navigation.navigate('ImageScreen', {image})}
        >
            <Image 
                source={{
                    uri: image.src.small
                    ? image.src.small
                     :'https://cdn.iconscout.com/icon/free/png-512/no-image-1771002-1505134.png',
                }}
                style={{ height: 130, width: '100%' }}
            />
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    CardImage: {
        display:'flex',
        width:'47.5%',
        margin: 4,
        justifyContent:'space-between',
        backgroundColor:'#2c292c',
        borderWidth:0,
        borderRadius:5,
    },
});

export default CardImage;
