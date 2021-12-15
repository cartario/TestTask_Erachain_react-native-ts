import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import Details from '../screens/Details';

const Tab = createBottomTabNavigator();

function BottomTabsNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeBottomTab"
        component={Home}
        options={{title: 'О приложении'}}
      />
      <Tab.Screen
        name="DetailsBottomTab"
        component={Details}
        options={{title: 'Котировки'}}
      />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigation;
