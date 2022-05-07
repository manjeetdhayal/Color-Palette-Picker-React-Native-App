import React from 'react';

import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'My Home' }}
        />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          //to pass the colorpalette name as title of the screen instead of the 'color palette' for all the screens
          options={({ route }) => ({
            title: route.params.paletteName,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
