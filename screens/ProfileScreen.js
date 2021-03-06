import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from '../App';

/* FIXME add real location */
/* FIXME add real number of listings and changing plural "listing" */

export default function ProfileScreen({ navigation }) {
  return (
    <LinearGradient
      colors={[BACKGROUND_COLOR, '#D1D1D1']}
      locations={[0.0, 1.0]}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.profileCard}>
          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => navigation.navigate('EditProfile')}
            activeOpacity={.5}
          >
            <Icon
              style={{ fontFamily: "LinzIcons" }}
              name='thickEdit'
              size='30'
              color='black'
            />
          </TouchableOpacity>
          <View style={styles.imageAndNameContainer}>
            <Image 
              style={styles.profileImage}
              source={require('../assets/images/profileImage.jpg')}
            />
            <Text style={styles.profileText}>Linzi Bowman</Text>
            <Text style={styles.profileSubtext}>Provo, UT</Text> 
            <Text style={styles.profileSubtext}>0 Listings</Text> 
            
          </View>
        </View>
        
        <View style={styles.allListings}>
          <TouchableOpacity 
            style={styles.listingThumbnail} 
            activeOpacity={.5}
            onPress={() => navigation.navigate('NewListing')}  
          >
            <LinearGradient
              colors={[TEAL, '#9CEEC9']}
              style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 6 }}
            >
              <Icon
                style={{ fontFamily: "LinzIcons" }}
                name='add'
                size='60'
                color='white'
              />
            </LinearGradient>
          </TouchableOpacity>
          <ListingThumbnail
            imgSrc={require('../assets/images/clothingDemos/KOPT/aeOveralls.jpg')}
            onPress={() => navigation.navigate('ExistingListing')}
          />
          <ListingThumbnail
            imgSrc={require('../assets/images/clothingDemos/KOPT/aeRippedBlueJeans.jpg')}
            onPress={() => navigation.navigate('ExistingListing')}
          />
          <ListingThumbnail
            imgSrc={require('../assets/images/clothingDemos/KOPT/aePurpleTop.jpg')}
            onPress={() => navigation.navigate('ExistingListing')}
          />
          <ListingThumbnail
            imgSrc={require('../assets/images/clothingDemos/KOPT/aeOrangeTop.jpg')}
            onPress={() => navigation.navigate('ExistingListing')}
          />
          {/* <Text>
          You have no listings at this time.
          </Text> */}
        </View>      
      </ScrollView>
    </LinearGradient>
  );
}

function ListingThumbnail({ imgSrc, onPress}) {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      activeOpacity={0.7}
    >
      <Image style={styles.listingThumbnail}
        source={imgSrc}
      />
    </TouchableOpacity>
  );
}

// Listing Thumbnail system for showing pictures?? 
// // GOOD
// var icon = this.props.active
//   ? require('./my-icon-active.png')
//   : require('./my-icon-inactive.png');
// <Image source={icon} />;

// style constants
const IMAGE_CURVE_RADIUS = 100;
const TEAL = '#4EE2C6';
const PURPLE = '#661DCE';
const RED = '#EE2C50';
const YELLOW = '#FDBD1A';
const BACKGROUND_COLOR = '#F2F2F2';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "stretch",
  },
  // profile image styling
  profileCard: {
    backgroundColor: '#fbfbfb',
    padding: 20,
    margin: 15,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 12,    
    ...Platform.select({
      ios: {
        shadowColor: '#292929',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  editButton: {
    //backgroundColor: "#D7D7D7",
    alignSelf: 'flex-end',
    padding: 5,
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
    borderColor: "#ECECEC",
    borderWidth: 7,
    borderRadius: IMAGE_CURVE_RADIUS,
  },
  profileText: {
    marginTop: 5,
    color: 'black',
    fontSize: 30,
    fontWeight: "500",
    fontFamily: 'Inter-Black',
  },
  profileSubtext: {
    fontFamily: 'Inter-Light',
    fontSize: 15,
  },

  // LISTINGS
  allListings: {
    ...Platform.select({
      ios: {
        shadowColor: '#292929',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        elevation: 20,
      },
    }),
    backgroundColor: '#fbfbfb',
    padding: 6,
    margin: 15,
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
    height: 101,
    width: 101,
    backgroundColor: '#D7D7D7',
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

//Use the following for sequences (aka intro sequence or new listing sequence)
//<Button title="Go to Home" onPress={() => navigation.navigate('Home', { /* add params here */ })} />
//<Button title="Go back" onPress={() => navigation.goBack()} />


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