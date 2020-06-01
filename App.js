import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState, } from "react";
import { StyleSheet, Dimensions } from 'react-native';
import Colors from './constants/Colors';

import * as Font from "expo-font";

// set up linzi's custom icons
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from './assets/fonts/config.json';
const expoAssetId = require('./assets/fonts/icomoon.ttf');
export const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'LinzIcons', expoAssetId);

// import {
//   Inter_900Black,
// } from '@expo-google-fonts/inter';

import useCachedResources from './hooks/useCachedResources';

import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreen from './screens/ProfileStack/EditProfile';
import NewListingScreen from './screens/ProfileStack/NewListing';
import ExistingListingScreen from './screens/ProfileStack/ExistingListing';
import HomeScreen from './screens/HomeScreen';
import MessageScreen from './screens/MessageScreen';
import SellingScreen from './screens/MessageStack/SellingScreen';
import CardDisplayListingScreen from './screens/CardDisplayListingScreen';

const BACKGROUND_COLOR = '#F2F2F2';
const RED = '#EE2C50';
const Stack = createStackNavigator(); 

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      headerMode='none'
    > 
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="NewListing" component={NewListingScreen} />
      <Stack.Screen name="ExistingListing" component={ExistingListingScreen} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode='none'
    > 
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CardDisplayListing" component={CardDisplayListingScreen} />

    </Stack.Navigator>
  );
}

function MessageStack() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: true,
        labelStyle: styles.labelStyle,
        showIcon: false,
        pressOpacity: .6,
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        style: styles.messageTabBarStyle,
        tabStyle: styles.tabStyle,
        indicatorStyle: { backgroundColor: RED },
        scrollEnabled: false, // true would allow the icons to move to center as its activated
        allowFontScaling: false,
      }}
      tabBarPosition='top'
      backBehavior='none'
      initialRouteName="Buying" 
      headerMode='none'
      initialLayout={{ width: Dimensions.get('window').width }}
    > 
      <Tab.Screen name="Buying" component={MessageScreen} />
      <Tab.Screen name="Selling" component={SellingScreen} />

    </Tab.Navigator>
  );
}



const Tab = createMaterialTopTabNavigator();

export default function App(props) {
  //const isLoadingComplete = useCachedResources();

  let [fontsLoaded] = useFonts({
    "Inter-Light": require("./assets/fonts/Inter-Light.otf"),
    "Inter-Thin": require("./assets/fonts/Inter-Thin.otf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.otf"),
    "LinzIcons": require("./assets/fonts/icomoon.ttf"),
    //"Merriweather-Bold": require("./assets/fonts/Merriweather-Bold.ttf"),
    //"Merriweather-Black": require("./assets/fonts/Merriweather-Black.ttf"),

  });
  
  // maybe return <AppLoading /> look into later
  if (!fontsLoaded /*|| !isLoadingComplete*/) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator 
          
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              

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
              return <Icon style={styles.iconStyle} name={iconName} color={color} />;
            },
          })}
          tabBarOptions={{
            showLabel: false,
            showIcon: true,
            pressOpacity: .6,
            style: styles.tabBarStyle,
            tabStyle: styles.tabStyle,
            indicatorStyle: { backgroundColor: BACKGROUND_COLOR },
            scrollEnabled: false, // true would allow the icons to move to center as its activated
            iconStyle: styles.iconStyle,
            allowFontScaling: false,
          }}
          tabBarPosition='top'
          backBehavior='none'
          initialRouteName="Home" 
          headerMode='none'
          initialLayout={{ width: Dimensions.get('window').width }}
          
        >
          <Tab.Screen
            name="Profile"
            component={ProfileStack}
            //options={{ title: 'Profile' }}
          />
          <Tab.Screen
            name="Home"
            component={HomeStack}
            //options={{ title: 'Swiper' }}
          />
          <Tab.Screen
            name="Messages"
            component={MessageStack}
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
    shadowColor: BACKGROUND_COLOR,
    elevation: 0,
    //height: 60,
    marginTop: 0,
    paddingTop: 10,    
    paddingBottom: 10,
  },
  tabStyle: {
    paddingTop: 5,
    paddingBottom: 5,
    padding: 20,
    //backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    fontSize: 25,
    margin: 0,
  },
  
  messageTabBarStyle: {
    backgroundColor: BACKGROUND_COLOR,
    shadowColor: BACKGROUND_COLOR,
    elevation: 0,
    //height: 60,
    marginTop: -10,
  },
  labelStyle: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
  },
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
