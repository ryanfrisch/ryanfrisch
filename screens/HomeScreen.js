import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


export default function HomeScreen() {
  return (
    <LinearGradient
      colors={[BACKGROUND_COLOR, BACKGROUND_COLOR]}
      locations={[0.0, 1.0]}
      style={styles.container}
    >
      <View style={styles.listingCard}>
        <Image
          source={require('../assets/images/clothingDemos/thrasherCrop.jpg')}
          style={styles.listingImage}
        />
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
        <TouchableOpacity style={styles.dislikeButton} activeOpacity={.5}> 
          <Icon
            name='linzIcons-05'
            size='45'
            color='#4EE2C6'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.instantBuyButton} activeOpacity={.5}> 
          <Icon
            name='linzIcons-02'
            size='36'
            color='#FDBD1A'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.likeButton} activeOpacity={.5}> 
          <Icon
            name='linzIcons-08'
            size='45'
            color='#EE2C50'
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}


// styles below
const BACKGROUND_COLOR = '#F2F2F2';
const BUTTON_W_H = 70;
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
  instantBuyButton: {
    backgroundColor: 'white',
    height: BUTTON_W_H * .85,
    width: BUTTON_W_H * .85,
    borderRadius: BUTTON_W_H * .85 * .5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 18,
    marginRight: 18,
  },
  likeButton: {
    backgroundColor: 'white',
    height: BUTTON_W_H,
    width: BUTTON_W_H,
    borderRadius: BUTTON_W_H * .5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
    marginRight: 12,
  },
  dislikeButton: {
    backgroundColor: 'white',
    height: BUTTON_W_H,
    width: BUTTON_W_H,
    borderRadius: BUTTON_W_H * .5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
    marginRight: 12,
    paddingTop: -1,
    paddingLeft: -1,
  }
});

// show one image or the other
{/* <Image
          source={
            true ? require('../assets/images/my-profile-image.png') : require('../assets/images/robot-prod.png')
          }
          style={styles.listingImage}
        /> */}