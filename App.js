import React from 'react';

import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import ModalColorPaletteScreen from './screens/ModalColorPaletteScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen
            name="Home"
            component={Home}
            options={{ title: 'My Home' }}
          />
          <RootStack.Screen
            name="ColorPalette"
            component={ColorPalette}
            //to pass the colorpalette name as title of the screen instead of the 'color palette' for all the screens
            options={({ route }) => ({
              title: route.params.paletteName,
            })}
          />
        </RootStack.Group>

        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen
            name="MyModal"
            component={ModalColorPaletteScreen}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
