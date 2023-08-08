/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
// import { BottomNavigation } from './components/risk_willingness/BottomNavigation';
import MainRiskWillingness from './components/risk_willingness/MainRiskWillingness';
import MainUserEnroll from './components/user-enroll/MainUserEnroll';
import MainGetStarted from './components/get_started/MainGetStarted';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Start' component={MainGetStarted}/>
        <Stack.Screen name='Enroll' component={MainUserEnroll}/>
        <Stack.Screen name='Risk' component={MainRiskWillingness}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
