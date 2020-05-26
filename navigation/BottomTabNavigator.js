import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MessageScreen from '../screens/MessageScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Swipe';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile', //FIXME remove later
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-contact" />,
        }}
      />
      <BottomTab.Screen
        name="Swipe"
        component={HomeScreen}
        options={{
          title: 'Swipe', //FIXME remove later
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-shirt" />, 
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          title: 'Messages', //FIXME remove later
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-chatboxes" />, 
        }}
      />
    </BottomTab.Navigator>
  );
}

// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 80, marginTop: 20,}}
//       source={require('../assets/images/k-icon.png')}
//     />
//   );
// }

function getHeaderTitle(route) { // FIXME get rid of header
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Swipe':
      return '';
    case 'Profile':
      return '';
    case 'Messages':
      return '';
  }
}
