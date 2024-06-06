import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/* Import all my screens */
import SignUp from '../screens/SignUp';
import RecoverPassw from '../screens/RecoverPassw';
import RecoverPassw2 from '../screens/RecoverPassw2';
import SignIn from '../screens/SignIn';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'SignIn', headerShown: false, }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'SignUp', headerShown: false, }} />
      <Stack.Screen name="RecoverPassw" component={RecoverPassw} options={{ title: 'RecoverPassw', headerShown: false, }} />
      <Stack.Screen name="RecoverPassw2" component={RecoverPassw2} options={{ title: 'RecoverPassw2', headerShown: false, }} />
    </Stack.Navigator>
  );
}
