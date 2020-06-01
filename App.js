import 'react-native-gesture-handler';
import EnterData from './src/screens/EnterData'
import Processing from './src/screens/Processing'
import NfcResults from './src/screens/NfcResults'

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FacialRecProcessing from './src/screens/FacialRecProcessing';
import FacialRecAccepted from './src/screens/FacialRecAccepted';

export const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="EnterData">
        <Stack.Screen name="EnterData" component={EnterData} />
        <Stack.Screen name="Processing" component={Processing} />
        <Stack.Screen name="NfcResults" component={NfcResults} />
        <Stack.Screen
          name="FacialRecProcessing"
          component={FacialRecProcessing}
        />
        <Stack.Screen name="FacialRecAccepted" component={FacialRecAccepted} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
