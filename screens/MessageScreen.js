import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from '../App';

// FIXME IMPLEMENT FLATLIST

const BACKGROUND_COLOR = '#F2F2F2';

export default function MessageScreen({ navigation }) {
  return (
    <LinearGradient
      colors={[BACKGROUND_COLOR, '#D1D1D1']}
      locations={[0.0, 1.0]}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.buyingTab}>
          <View style={styles.likesContainer}>
            <LikeItem 
              imageSrc={require('../assets/images/clothingDemos/KOPT/nikePinkShorts.jpg')}
              onPress={() => navigation.navigate('ExistingListing')}
            />
            <LikeItem 
              imageSrc={require('../assets/images/clothingDemos/KOPT/aePurpleTop.jpg')}
              onPress={() => navigation.navigate('ExistingListing')}
            />
            <LikeItem 
              imageSrc={require('../assets/images/clothingDemos/KOPT/aeSwimsuit.jpg')}
              onPress={() => navigation.navigate('ExistingListing')}
            />
            <LikeItem 
              imageSrc={require('../assets/images/clothingDemos/KOPT/patagoniaJacket.jpg')}
              onPress={() => navigation.navigate('ExistingListing')}
            />
          </View>
          
          <View style={styles.messagesContainer}>
            <MessageItem 
              imageSrc={require('../assets/images/clothingDemos/KOPT/luluLeggings.jpg')}
              listingName={'Lulu Leggings'}
              mostRecentMsg={'Hey is this still available?'}
              onPress={() => navigation.navigate('ExistingListing')}
            />
            <MessageItem 
              imageSrc={require('../assets/images/clothingDemos/KOPT/northFaceHoodie.jpg')}
              listingName={'North Face Sweatshirt'}
              mostRecentMsg={'can i pick this up tonight?'}
              onPress={() => navigation.navigate('ExistingListing')}
            />
            <MessageItem 
              imageSrc={require('../assets/images/clothingDemos/KOPT/vansSweatshirt.jpg')}
              listingName={'Vans Sweatshirt'}
              mostRecentMsg={'Sorry, but I just sold it'}
              onPress={() => navigation.navigate('ExistingListing')}
            />
            <MessageItem 
              imageSrc={require('../assets/images/clothingDemos/KOPT/patagoniaShorts.jpg')}
              listingName={'Patagonia Shorts'}
              mostRecentMsg={'I can come right now to grab it!'}
              onPress={() => navigation.navigate('ExistingListing')}
            />
            <MessageItem 
              imageSrc={require('../assets/images/clothingDemos/KOPT/jeanShorts.jpg')}
              listingName={'American Eagle Shorts'}
              mostRecentMsg={'let\'s meet at the corner of University...'}
              onPress={() => navigation.navigate('ExistingListing')}
            />
            <MessageItem 
              imageSrc={require('../assets/images/clothingDemos/KOPT/luluShorts.jpg')}
              listingName={'Lululemon Shorts'}
              mostRecentMsg={'I can offer $20'}
              onPress={() => navigation.navigate('ExistingListing')}
            />
          </View>
        </View>
        {/* <TouchableOpacity style={styles.goToSwipeButton} onPress={() => navigation.navigate('HomeScreen')}>
          <Icon
            style={{ fontFamily: "LinzIcons" }}
            name={'backArrow'}
            size={'40'}
            color={'#EE2C50'}
          />
        </TouchableOpacity>  FIX SO IT OVERLAYS*/}
      </ScrollView>
  
    </LinearGradient>
  );
}

function LikeItem({ imageSrc, onPress }) {
  return(
    <TouchableOpacity
      activeOpacity={.8}
      onPress={onPress}
    >
      <Image 
        source={imageSrc}
        style={styles.likeImage}
      />
    </TouchableOpacity>
  )
}

function MessageItem({ imageSrc, listingName, mostRecentMsg, onPress }) {
  return (
    <TouchableOpacity 
      style={styles.message}
      onPress={onPress}
    >
      <Image
        source={ imageSrc }
        style={styles.messageImage}
      />
      <View style={styles.textGroup}>
        <Text style={styles.nameText}>
          { listingName }
        </Text>
        <Text style={styles.mostRecentMessageText}>
          { mostRecentMsg }
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const BUTTON_W_H = 65;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "stretch",
  },
  buyingTab: {
    flex: 1,
  },
  goToSwipeButton: {
    // position: 'absolute',
    // bottom: 15,
    // left: 10,
    backgroundColor: 'white',
    height: BUTTON_W_H,
    width: BUTTON_W_H,
    borderRadius: BUTTON_W_H * .5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
    marginRight: 6,
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
  likesContainer: {
    backgroundColor: '#fbfbfb',
    padding: 5,
    margin: 10,
    alignItems: "center",
    borderRadius: 12,    
    flexDirection: 'row',
    //overflow: 'scroll', removes shadow but crops image to fit
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
  likeImage: {
    borderRadius: 10,
    marginRight: 5,
    height: 70,
    width: 70,
    backgroundColor: '#D7D7D7',
    alignItems: "center",
    justifyContent: "center",

    //borderWidth: 5,
    //borderColor: "#ECECEC", 
    //overflow: 'hidden',
  },
  messagesContainer: {
    backgroundColor: '#fbfbfb',
    margin: 10,
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
  message: {
    height: 80,
    flexDirection: "row",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#E2E2E2',
    //backgroundColor: 'black'
    alignItems: 'center',
  },
  messageImage: {
    borderRadius: 10, 
    height: 70,
    width: 70,
    marginLeft: 5,
    marginRight: 15,
  },
  textGroup: {
    
  },
  nameText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Inter-Bold',
  },
  mostRecentMessageText: {
    color: 'gray',
    fontSize: 14,
    fontFamily: 'Inter-Light',
  },

});
