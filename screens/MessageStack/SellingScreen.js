import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from '../../App';

const BACKGROUND_COLOR = '#F2F2F2';

export default function SellingScreen({ navigation }) {
  return (
    <LinearGradient
      colors={[BACKGROUND_COLOR, '#D1D1D1']}
      locations={[0.0, 1.0]}
      style={styles.container}
    > 
      <ScrollView>
        <View style={styles.buyingTab}>
          <View style={styles.messagesContainer}>
            <MessageItem
              imageSrc={require('../../assets/images/clothingDemos/KOPT/aeRippedBlueJeans.jpg')}
              listingName={'Anna'}
              mostRecentMsg={'Yeah, I can go down to $8'}
              onPress={() => navigation.navigate('ExistingListing')}
            />
            <MessageItem 
              imageSrc={require('../../assets/images/clothingDemos/KOPT/aeOveralls.jpg')}
              listingName={'Julia'}
              mostRecentMsg={'Sorry, but I just sold it'}
              onPress={() => navigation.navigate('ExistingListing')}
            />
            <MessageItem 
              imageSrc={require('../../assets/images/clothingDemos/KOPT/aeOveralls.jpg')}
              listingName={'Kim'}
              mostRecentMsg={'Yeah, you can pick it up tonight!'}
              onPress={() => navigation.navigate('ExistingListing')}
            /> 
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "stretch",
  },
  buyingTab: {
    flex: 1,
    
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
