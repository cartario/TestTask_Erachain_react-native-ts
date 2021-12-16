import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';
import Details from '../screens/Details';
import NotFound from '../screens/NotFound';
import BottomTabsTabNavigator from './BottomTabsNavigator';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  const isLightTheme = useColorScheme() === 'light';

  return (
    <NavigationContainer theme={isLightTheme ? DefaultTheme : DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BottomTabsTabNavigator}
          options={{title: 'Главная'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Котировки'}}
        />
        <Stack.Screen name="NotFound" component={NotFound} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
