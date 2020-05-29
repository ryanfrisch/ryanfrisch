import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

// FIXME find a way to not repeat on every page
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from '../../assets/fonts/config.json';
const expoAssetId = require('../../assets/fonts/icomoon.ttf');
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'LinzIcons', expoAssetId);

const BACKGROUND_COLOR = '#F2F2F2';

export default function SellingScreen() {
  return (
    <LinearGradient
      colors={[BACKGROUND_COLOR, '#D1D1D1']}
      locations={[0.0, 1.0]}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.buyingTab}>
          <View style={styles.likesContainer}>
            <Image 
              source={require('../../assets/images/my-profile-image.png')}
              style={styles.likeImage}
            />
            <Image 
              source={require('../../assets/images/my-profile-image.png')}
              style={styles.likeImage}
            />
            <Image 
              source={require('../../assets/images/my-profile-image.png')}
              style={styles.likeImage}
            />
            <Image 
              source={require('../../assets/images/my-profile-image.png')}
              style={styles.likeImage}
            />
            <Image 
              source={require('../../assets/images/my-profile-image.png')}
              style={styles.likeImage}
            />
          </View>
          <View style={styles.messagesContainer}>
            <TouchableOpacity style={styles.message}>
              <Image 
                source={require('../../assets/images/my-profile-image.png')}
                style={styles.messageImage}
              />
              <View style={styles.textGroup}>
                <Text style={styles.nameText}>
                  SELLING SCREEN
                </Text>
                <Text style={styles.mostRecentMessageText}>
                  Hey is this still available?
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.message}>
              <Image 
                source={require('../../assets/images/my-profile-image.png')}
                style={styles.messageImage}
              />
              <View style={styles.textGroup}>
                <Text style={styles.nameText}>
                  Gucci Dress
                </Text>
                <Text style={styles.mostRecentMessageText}>
                  I can give you $50
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.message}>
              <Image
                source={require('../../assets/images/my-profile-image.png')}
                style={styles.messageImage}
              />
              <View style={styles.textGroup}>
                <Text style={styles.nameText}>
                  Linzi Bowman
                </Text>
                <Text style={styles.mostRecentMessageText}>
                  Hey is this still available?
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
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
    fontFamily: 'Inter-Black',
  },
  mostRecentMessageText: {
    color: 'gray',
    fontSize: 14,
    fontFamily: 'Inter-Light',
  },

});