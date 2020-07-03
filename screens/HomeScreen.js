import React, { useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions, Vibration, Share } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from '../App';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import Demo from '../assets/data/demo.js';
import CardItem from '../components/CardItem';

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
      <CardStack
          loop={true}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          //ref={swiper => (this.swiper = swiper)}
        >
          {Demo.map((item, index) => (
            <Card key={index}>
              <CardItem
                imageSrc={item.imageSrc}
                size={item.size}
                brand={item.brand}
                title={item.title}
                description={item.description}
                price={item.price}
                // actions
                // onPressLeft={() => this.swiper.swipeLeft()}
                // onPressRight={() => this.swiper.swipeRight()}
              />
            </Card>
          ))}
        </CardStack>
      {/* <ListingCard
        onPress={() => navigation.navigate('CardDisplayListing')}
        imageSrc={require('../assets/images/clothingDemos/KOPT/aeModelledGreenDress.jpg')}
        size={'S'}
        brand={'american eagle'}
        title={'cute sundress!'}
        description={'just trying to get rid of it, plz come get it rn'}
        price={'$19'}
      /> */}
      <View style={styles.swipeButtons}> 
        <SwipeButton // rewind button
          icon="rewind"
          bigOrSmall='small'
          color='#661DCE'
          onPress={onPress}
        />
        <SwipeButton // trash button
          icon="trash"
          bigOrSmall='big'
          color='#4EE2C6'
          onPress={onPress}
        />
        <SwipeButton // instaMessage button
          icon="instaMessage"
          bigOrSmall='small'
          color='#FDBD1A'
          onPress={onPress}
        />
        <SwipeButton // heart button
          icon="heart"
          bigOrSmall='big'
          color='#EE2C50'
          onPress={onPress}
        />
        <SwipeButton // share button
          icon="share"
          bigOrSmall='small'
          color='#FDBD1A'
          onPress={onPress} // change to onShare when it gets working
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

  // BUTTONS
  swipeButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 0,
    position: "absolute",
    alignSelf: 'center',
    bottom: 10,
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