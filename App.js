
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './Start';
import Home from './Home';
import Data from './Data';
import Viewnotes from './Viewnotes';
import Addedit from './Addedit';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Data" component={Data} />
        <Stack.Screen name="Viewnotes" component={Viewnotes} />
        <Stack.Screen name="Addedit" component={Addedit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
