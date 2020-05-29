import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState, useEffect } from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import Colors from './constants/Colors';
import { AppLoading } from "expo";

import * as Font from "expo-font";
import { Ionicons } from '@expo/vector-icons';

// import {
//   Inter_900Black,
// } from '@expo-google-fonts/inter';

import useCachedResources from './hooks/useCachedResources';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import MessageScreen from './screens/MessageScreen';

const BACKGROUND_COLOR = '#F2F2F2';
const Stack = createStackNavigator(); 

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      headerMode='none'
    > 
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="NewListing" component={HomeScreen} />

    </Stack.Navigator>
  );
}



const Tab = createMaterialTopTabNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  let [fontsLoaded] = useFonts({
    "Inter-Light": require("./assets/fonts/Inter-Light.otf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
    "LinzIcons": require("./assets/fonts/icomoon.ttf"),
    //chelsea market from google fonts
  });
  
  // maybe return <AppLoading /> look into later
  if (!fontsLoaded || !isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              size = 28;

              if (route.name === 'Home') {
                iconName = focused ? 'linzIcons-11' : 'linzIcons-11';
                color = focused ? Colors.YELLOW : 'gray';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'linzIcons-03' : 'linzIcons-03';
                color = focused ? Colors.TEAL : 'gray';
              } else if (route.name === 'Messages') {
                iconName = focused ? 'linzIcons-06' : 'linzIcons-06';
                color = focused ? Colors.RED : 'gray';
              }
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            showLabel: false,
            showIcon: true,
            pressOpacity: .6,
            activeTintColor: 'gray',
            inactiveTintColor: 'gray',
            style: styles.tabBarStyle,
            indicatorStyle: { backgroundColor: BACKGROUND_COLOR },
            
          }}
          backBehavior='none'
          initialRouteName="Home" 
          headerMode='none'
        >

          <Tab.Screen
            name="Profile"
            component={ProfileStack}
            //options={{ title: 'Profile' }}
          />
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            //options={{ title: 'Swiper' }}
          />
          <Tab.Screen
            name="Messages"
            component={MessageScreen}
            //options={{ title: 'Messages' }}
          />
          
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}


function useFonts(fontMap) {
  let [fontsLoaded, setFontsLoaded] = useState(false);
  (async () => {
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  })();
  return [fontsLoaded];
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  tabBarStyle: {
    backgroundColor: BACKGROUND_COLOR,
    //height: 60,
    marginTop: 5,
    paddingTop: 10,
    paddingBottom: 0,
    elevation: 0,
    shadowColor: BACKGROUND_COLOR,
  }
});






// TO ADD NOTIFICATIONS FOR THE ICONS (LIKE FOR NEW MESSAGES)
// function IconWithBadge({ name, badgeCount, color, size }) {
//   return (
//     <View style={{ width: 24, height: 24, margin: 5 }}>
//       <Ionicons name={name} size={size} color={color} />
//       {badgeCount > 0 && (
//         <View
//           style={{
//             // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
//             position: 'absolute',
//             right: -6,
//             top: -3,
//             backgroundColor: 'red',
//             borderRadius: 6,
//             width: 12,
//             height: 12,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
//             {badgeCount}
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// }
