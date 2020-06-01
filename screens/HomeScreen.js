import React, { useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Vibration, Share } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from '../App';

export default function HomeScreen({ navigation }) {

  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  // const onShare = async () => {
  //   try {
  //     const result = await Share.share({
  //       message:
  //         'React Native | A framework for building native apps using React',
  //     });
  //     if (result.action === Share.sharedAction) {
  //       if (result.activityType) {
  //         // shared with activity type of result.activityType
  //       } else {
  //         // shared
  //       }
  //     } else if (result.action === Share.dismissedAction) {
  //       // dismissed
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  return (
    <LinearGradient
      colors={[BACKGROUND_COLOR, '#D5D5D5']}
      locations={[0.0, 1.0]}
      style={styles.container}
    >
      <ListingCard
        onPress={() => navigation.navigate('CardDisplayListing')}
        imageSrc={require('../assets/images/clothingDemos/thrasherCrop.jpg')}
        size={'S'}
        title={'Thrasher'}
        description={'just trying to get rid of it, plz come get it rn'}
        price={'$19'}
      />
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
          onPress={onPress} // change to onShare when it gets working
        />
      </View>
    </LinearGradient>
  );
}

export function ListingCard({ onPress, imageSrc, size, title, description, price }) {
  return (
    <TouchableOpacity 
        style={styles.listingCard}
        activeOpacity={.8}
        onPress={onPress}
      >
        <Image
          source={imageSrc}
          style={styles.listingImage}
        />
        <LinearGradient
          colors={['transparent', 'transparent',  'rgba(0,0,0,.5)', 'rgba(0,0,0,.9)']}
          locations={[0.0, 0.7, .85, 1.0]}
          style={styles.opaqueGradient}
        >
        </LinearGradient>
        <Text style={styles.sizeText}>
            {size}
        </Text>
        <View style={styles.textGroup}>
          <Text style={styles.bigText}>
            {title}
          </Text>
          <Text style={styles.descriptText}>
            {description}
          </Text>
          <Text style={styles.priceText}>
            {price}
          </Text>
        </View>
      </TouchableOpacity>
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
    <TouchableOpacity 
      style={buttonStyle} 
      activeOpacity={.6} 
      //onPress={Vibration.vibrate(1000)}
    > 
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
    bottom: 25,
    padding: 5,
    paddingBottom: 0,
    fontSize: 40,
    color: 'white',
    textShadowColor: '#292929',
    textShadowRadius: 6,
    fontFamily: 'Inter-Black',
    overflow: 'hidden', //need to add a height or it just goes to next line
    width: '80%',
  },
  descriptText: {
    position: 'absolute',
    left: 20,
    bottom: 10,
    fontSize: 16,
    color: 'white',
    opacity: 1,
    textShadowColor: '#292929',
    textShadowRadius: 6,
    fontFamily: 'Inter-Light',
  },
  priceText: {
    position: 'absolute',
    right: 15,
    bottom: 35,
    fontSize: 20,
    color: 'white',
    textShadowColor: '#292929',
    textShadowRadius: 6,
    fontFamily: 'Inter-Light',
  },
  sizeText: {
    position: 'absolute',
    top: 20,
    right: 20,
    fontSize: 25,
    color: 'white',
    textShadowColor: '#292929',
    textShadowRadius: 6,
    fontFamily: 'Inter-Bold',
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