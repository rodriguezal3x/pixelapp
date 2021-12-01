import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Text, StyleSheet } from 'react-native';
import Logo from './assets/Logo.png'

import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{
          headerLeft: () => <Image source={Logo} style={styles.logo}/>,
          headerRight:() =>(
            <Text 
            style={{ color:'#ffff', fontSize:18 }}
            onPress={() => console.log("searching")}
            >
            Search
            </Text>
          ),
          title:"Pexel Art",
          headerTitleStyle:{
            color:'#ffff'
          },
          headerStyle:{
            backgroundColor: '#000000'
          }
        }}
        />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo:{
    width:37,
    height:37,
    marginEnd:10,
    borderRadius:5,
  },
})