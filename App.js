import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/Stack';

import HomeScreen from './screens/HomeScreen';
import SecondaryScreen from './screens/SecondaryScreen';
import CafeScreen from './screens/CafeScreen';
import BoloScreen from './screens/BoloScreen';
import PaoScreen from './screens/PaoScreen';

const Stack = createStackNavigator();

export default function App() {
  return  (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bem-Vindo' }} />
    <Stack.Screen name="Secondary" component={SecondaryScreen} options={{ title: 'Opções Deliciosas' }} />
    <Stack.Screen name="Cafe" component={CafeScreen} options={{ title: 'Nosso Cafe' }} />
    <Stack.Screen name="Bolo" component={BoloScreen} options={{ title: 'Bolo de Chocolate' }} />
    <Stack.Screen name="Pao" component={PaoScreen}  options={{ title: 'Pão Caseiro' }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}