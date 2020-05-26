import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import iconSet from '@expo/vector-icons/build/FontAwesome5';
import { startClock } from 'react-native-reanimated';

/* FIXME add real location */
/* FIXME add real number of listings and changing plural "listing" */

export default function ProfileScreen() {
  // FIXME remove this counter and add a legit onpress action for Preferences button
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.profileCard}>
          <TouchableOpacity 
            style={styles.editButton}
            onPress={onPress}
            activeOpacity={.5}
          >
            <Ionicons
              name='ios-settings'
              size='20'
              color='white'
            />
          </TouchableOpacity>
          <View style={styles.imageAndNameContainer}>
            <Image 
              style={styles.profileImage}
              source={require('../assets/images/my-profile-image.png')}
            />
            <Text style={styles.profileText}>Ryan Frisch</Text>
            <Text>Provo, UT</Text> 
            <Text>0 Listings</Text> 
            
          </View>
        </View>
        
        <View style={styles.allListings}>
          <TouchableOpacity style={styles.listingThumbnail} activeOpacity={.5}>
            <Ionicons
              name='ios-add'
              size='60'
              color='white'
            />
          </TouchableOpacity>
          <Image style={styles.listingThumbnail}
            source={require('../assets/images/clothingDemos/bananaSkirt.jpg')}
          />
          <Image style={styles.listingThumbnail}
            source={require('../assets/images/clothingDemos/blackPants.jpg')}
          />
          <Image style={styles.listingThumbnail}
            source={require('../assets/images/clothingDemos/stripedLongSleeve.jpg')}
          />
          <Image style={styles.listingThumbnail}
            source={require('../assets/images/clothingDemos/thrasherCrop.jpg')}
          />
          {/* <Text>
          You have no listings at this time.
          </Text> */}
        </View>
        
       
      </ScrollView>
    </View>
  );
}

// Listing Thumbnail system for showing pictures?? 
// // GOOD
// var icon = this.props.active
//   ? require('./my-icon-active.png')
//   : require('./my-icon-inactive.png');
// <Image source={icon} />;

// style constants
// const PREFER_BUTTON_CURVE_RADIUS = 20; NO LONGER USED
const IMAGE_CURVE_RADIUS = 100;
const TEAL = '#4EE2C6';
const PURPLE = '#661DCE';
const RED = '#EE2C50';
const YELLOW = '#FDBD1A';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: "stretch",
  },
  contentContainer: {
    paddingTop: 15,
  },

  // profile image styling
  profileCard: {
    backgroundColor: '#fbfbfb',
    padding: 20,
    margin: 30,
    marginBottom: 10,
    alignItems: "center",
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
  editButton: {
    backgroundColor: TEAL,
    alignSelf: 'flex-end',
    height: 33,
    width: 33,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  imageAndNameContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: -10,
  },
  profileImage: {
    height: 200,
    width: 200,
    overflow: 'hidden',
    borderColor: TEAL,
    borderWidth: 7,
    borderRadius: IMAGE_CURVE_RADIUS,
  },
  profileText: {
    marginTop: 5,
    color: 'black',
    fontSize: 30,
    fontWeight: "500",
    //fontFamily: FIXME ADD CUSTOM FONT
  },

  // LISTINGS
  allListings: {
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
    backgroundColor: '#fbfbfb',
    padding: 6,
    margin: 30,
    marginBottom: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 15,
  },
  listingThumbnail: {
    borderRadius: 7,
    margin: 5,
    marginBottom: 7,
    height: 90,
    width: 90,
    backgroundColor: TEAL,
    alignItems: "center",
    justifyContent: "center",
  },
  

  // preferences button NO LONGER USED
  // preferencesButton: {
  //   backgroundColor: '#FFFFFF',
  //   borderColor: TEAL,
  //   borderWidth: 4,
  //   justifyContent: "center",
  //   padding: 15,
  //   marginTop: 10,
  //   borderTopLeftRadius: PREFER_BUTTON_CURVE_RADIUS,
  //   borderTopRightRadius: PREFER_BUTTON_CURVE_RADIUS,
  //   borderBottomLeftRadius: PREFER_BUTTON_CURVE_RADIUS,
  //   borderBottomRightRadius: PREFER_BUTTON_CURVE_RADIUS,
  // },
  // preferencesButtonText: {
  //   color: 'black',
  //   fontSize: 20,
  //   //fontFamily: FIXME ADD CUSTOM FONT
  // },

});



// FOR REFERENCE
// ios-chatboxes (rectangular chatboxes)

// ios-color-palette (painters thingy)
// ios-contact
// ios-person

// ios-shirt

// ios-hammer
// ios-build (wrench)
// ios-construct (wrench and hammer)

// ios-create (pencil and paper)

// ios-more (three dots)
// ios-options (sliders)
// ios-switch (two switches)
// ios-cog (gear thingy)
// ios-settings

// ios-funnel (filter thingy)
// ios-search

// ios-heart
// ios-save (floppy disks)
// ios-star (normal star)
// ios-trash (trash can)

// ios-send
// ios-paperplane (like for sending stuff)

// ios-image
// ios-help-circle-outline
// ios-information-circle-outline

// ios-remove-circle (and -outline) (minus in a circle)
// ios-remove (-)

// ios-stats (bar graph)
//
// logo-instagram, facebook, pinterest, twitter etc.
// ios-code (-working)

// ios-card
// ios-cash
// ios-close (-circle-outline)
// ios-pin
// ios-pricetag(s)
// ios-rewind
// ios-share-alt



// FontAwesome5
// socks