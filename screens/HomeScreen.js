import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.listingCard}>
        <Image
          source={require('../assets/images/my-profile-image.png')}
          style={styles.listingImage}
        />
        <View style={styles.textGroup}>
          <Text style={styles.bigText}>
            Patagonia
          </Text>
          <Text style={styles.smallText}>
            S $19
          </Text>
        </View>
      </View>
      <View style={styles.swipeButtons}> 
        <TouchableOpacity style={styles.dislikeButton} activeOpacity={.5}> 
          <Ionicons
            name='ios-close'
            size='60'
            color='white'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.instantBuyButton} activeOpacity={.5}> 
          <Ionicons
            name='ios-cash'
            size='30'
            color='white'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.likeButton} activeOpacity={.5}> 
          <Ionicons
            name='ios-heart'
            size='45'
            color='white'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}


// styles below

const BUTTON_W_H = 80;
const TEAL = '#4EE2C6';
const PURPLE = '#661DCE';
const RED = '#EE2C50';
const YELLOW = '#FDBD1A';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: "stretch",
  },

  listingCard: {
    flex: 3,
    backgroundColor: '#fbfbfb',
    margin: 10,
    marginBottom: 10,
    borderRadius: 12,    
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 9,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  listingImage: {
    flex: 6,
    marginBottom: 0,
    borderRadius: 12,
    //resizeMode: 'contain',
    height: '100%',
    width: '100%',
    //borderColor: '#EAEAEA', FOR POLAROID LOOK
    //borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGroup: {
    position: 'absolute',
    bottom: 10,
    padding: 12,
    paddingTop: 0,
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
    textShadowColor: 'black',
    textShadowRadius: 7,
    
  },
  smallText: {
    position: 'absolute',
    fontSize: 16,
    bottom: 0,
  },

  // BUTTONS
  swipeButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    marginTop: -10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  instantBuyButton: {
    backgroundColor: YELLOW,
    height: BUTTON_W_H * .8,
    width: BUTTON_W_H * .8,
    borderRadius: BUTTON_W_H * .8 * .5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 18,
    marginTop: -5,
  },
  likeButton: {
    backgroundColor: TEAL,
    height: BUTTON_W_H,
    width: BUTTON_W_H,
    borderRadius: BUTTON_W_H * .5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
  },
  dislikeButton: {
    backgroundColor: RED,
    height: BUTTON_W_H,
    width: BUTTON_W_H,
    borderRadius: BUTTON_W_H * .5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
  }
});

// show one image or the other
{/* <Image
          source={
            true ? require('../assets/images/my-profile-image.png') : require('../assets/images/robot-prod.png')
          }
          style={styles.listingImage}
        /> */}