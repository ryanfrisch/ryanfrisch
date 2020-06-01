import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { ListingCard } from '../HomeScreen';
import { Icon } from '../../App';

export default function ExistingListingScreen({ navigation }) {
  // FIXME remove this counter and add a legit onpress action for edit button
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  
  // for picker 
  //const [selectedValue, setSelectedValue] = useState("java");

  return (
    <LinearGradient
      colors={[BACKGROUND_COLOR, '#D1D1D1']}
      locations={[0.0, 1.0]}
      style={styles.container}
    >
      <ListingCard
        onPress={onPress}
        imageSrc={require('../../assets/images/clothingDemos/thrasherCrop.jpg')}
        size={'S'}
        title={'Thrasher'}
        description={'just trying to get rid of it, plz come get it rn'}
        price={'$19'}
      />
      
    </LinearGradient>
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
const BACKGROUND_COLOR = '#F2F2F2';

const styles = StyleSheet.create({
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
});

//Use the following for sequences (aka intro sequence or new listing sequence)
//<Button title="Go to Home" onPress={() => navigation.navigate('Home', { /* add params here */ })} />
//<Button title="Go back" onPress={() => navigation.goBack()} />
