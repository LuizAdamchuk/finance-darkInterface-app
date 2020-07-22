import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';

const AppStack = createStackNavigator();

export const AppStackNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName="Home" headerMode="none">
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Details" component={Details} />
    </AppStack.Navigator>
  );
};
