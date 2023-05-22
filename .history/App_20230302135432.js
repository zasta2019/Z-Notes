
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './pages/Start';
//import Home from './Home';
import Home1 from './pages/Home';
import Data from './Data';
import Viewnotes from './Viewnotes';
import Addedit from './Addedit';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Home1" component={Home1} />
        <Stack.Screen name="Data" component={Data} />
        <Stack.Screen name="Viewnotes" component={Viewnotes} />
        <Stack.Screen name="Addedit" component={Addedit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;