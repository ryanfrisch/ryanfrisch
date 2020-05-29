import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

// FIXME find a way to not repeat on every page
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from '../assets/fonts/config.json';
const expoAssetId = require('../assets/fonts/icomoon.ttf');
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'LinzIcons', expoAssetId);


export default function HomeScreen() {

  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <LinearGradient
      colors={[BACKGROUND_COLOR, '#D5D5D5']}
      locations={[0.0, 1.0]}
      style={styles.container}
    >
      <View style={styles.listingCard}>
        <Image
          source={require('../assets/images/clothingDemos/thrasherCrop.jpg')}
          style={styles.listingImage}
        />
        <LinearGradient
          colors={['white', 'white', 'black']}
          locations={[0.0, 0.7, 1.0]}
          style={styles.opaqueGradient}
        >
        </LinearGradient>
        <View style={styles.textGroup}>
          <Text style={styles.bigText}>
            Thrasher
          </Text>
          <Text style={styles.smallText}>
            $19
          </Text>
        </View>
      </View>
      <View style={styles.swipeButtons}> 
        <SwipeButton // rewind button
          icon="linzIcons-03"
          bigOrSmall='small'
          color='#661DCE'
          onPress={onPress}
        />
        <SwipeButton // trash button
          icon="linzIcons-05"
          bigOrSmall='big'
          color='#4EE2C6'
          onPress={onPress}
        />
        <SwipeButton // instaMessage button
          icon="linzIcons-02"
          bigOrSmall='small'
          color='#FDBD1A'
          onPress={onPress}
        />
        <SwipeButton // heart button
          icon="linzIcons-08"
          bigOrSmall='big'
          color='#EE2C50'
          onPress={onPress}
        />
        <SwipeButton // share button
          icon="linzIcons-02"
          bigOrSmall='small'
          color='#FDBD1A'
          onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
        />
      </View>
    </LinearGradient>
  );
}


function SwipeButton({ icon, bigOrSmall, onPress, color}) {
  let size;
  let buttonStyle;
  if(bigOrSmall === 'big') {
    size = 45;
    buttonStyle = styles.bigButton;
  } else {
    size = 36;
    buttonStyle = styles.smallButton;
  }
  return (
    <TouchableOpacity style={buttonStyle} activeOpacity={.6} onPress={onPress}> 
      <Icon
        style={{ fontFamily: "LinzIcons" }}
        name={icon}
        size={size}
        color={color}
      />
    </TouchableOpacity>
  );
}



// styles below
const BACKGROUND_COLOR = '#F2F2F2';
const BUTTON_W_H = 65;
const TEAL = '#4EE2C6';
const PURPLE = '#661DCE';
const RED = '#EE2C50';
const YELLOW = '#FDBD1A';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "stretch",
  },

  listingCard: {
    flex: 5,
    backgroundColor: '#fbfbfb',
    margin: 10,
    marginBottom: 0,
    borderRadius: 12,    
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  listingImage: {
    borderRadius: 12,
    //resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  opaqueGradient: {
    position: 'absolute',
    bottom: 0,
    padding: 12,
    paddingTop: 0,
    width: '100%',
    height: '100%',
    opacity: .3,
    borderRadius: 12,
  },
  textGroup: {
    position: 'absolute',
    bottom: 10,
    padding: 12,
    paddingTop: 0,
    width: '100%',
    //justifyContent: 'space-between',
    //alignItems: "center",
    // fontFamily: '', HANDWRITTEN FONT FOR POLAROID LOOK
  },
  bigText: {
    position: 'absolute', 
    left: 10,
    bottom: 0,
    padding: 5,
    paddingBottom: 0,
    fontSize: 40,
    color: 'white',
    textShadowColor: '#292929',
    textShadowRadius: 6,
    //fontFamily: 'Baskerville',
    //fontWeight: 'bold',
    //fontStyle: 'italic',
  },
  smallText: {
    position: 'absolute',
    right: 15,
    bottom: 10,
    fontSize: 18,
    color: 'white',
    textShadowColor: '#292929',
    textShadowRadius: 6,
  },

  // BUTTONS
  swipeButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 0,
    ...Platform.select({
      ios: {
        shadowColor: '#292929',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  bigButton: {
    backgroundColor: 'white',
    height: BUTTON_W_H,
    width: BUTTON_W_H,
    borderRadius: BUTTON_W_H * .5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
    marginRight: 6,
  },
  smallButton: {
    backgroundColor: 'white',
    height: BUTTON_W_H * .8,
    width: BUTTON_W_H * .8,
    borderRadius: BUTTON_W_H * .8 * .5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
    marginRight: 6,
  },  
});

// show one image or the other
{/* <Image
          source={
            true ? require('../assets/images/my-profile-image.png') : require('../assets/images/robot-prod.png')
          }
          style={styles.listingImage}
        /> */}