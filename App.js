import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen'; 
import JuegoScreen from './components/JuegoScreen'; 
import CintaPage from './components/CintaPage'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Juego" component={JuegoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CintaPage" component={CintaPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
