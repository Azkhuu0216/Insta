import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Album from './Album';
import Videos from './Video';
import ProScreen from '../../src/ProScreen';

const TabTob = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <TabTob.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: 'powderblue'},
      }}>
      <TabTob.Screen
        name="Feed"
        component={Album}
        options={{tabBarLabel: 'Album'}}
      />
      <TabTob.Screen
        name="Notifications"
        component={Videos}
        options={{tabBarLabel: 'Videos'}}
      />
      <TabTob.Screen
        name="Photos"
        component={Videos}
        options={{tabBarLabel: 'Photos'}}
      />
    </TabTob.Navigator>
  );
}
export default MyTabs;
