import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import Details from '../screens/Details';
import SomethingNew from '../screens/SomethingNew';

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
      <Tab.Screen
        name="SomethingNewBottomTab"
        component={SomethingNew}
        options={{title: 'SomethingNew'}}
      />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigation;
