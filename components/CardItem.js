import React from 'react';

import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from '../App';  

const YELLOW = '#FDBD1A';

const CardItem = ({  
  imageSrc, 
  size, 
  brand, 
  title, 
  description, 
  price,
  onPress, 
}) => {
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
          colors={['transparent', 'transparent',  'rgba(0,0,0,.6)', 'rgba(0,0,0,1)']}
          locations={[0.0, 0.7, .85, 1.0]}
          style={styles.opaqueGradient}
        >
        </LinearGradient>
        <Text style={styles.sizeText}>
            {size}
        </Text>
        <View style={styles.textGroup}>
          <Text style={styles.brandText}>
            {brand}
          </Text>
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

const styles = StyleSheet.create({
  listingCard: {
    height: Dimensions.get('window').height * (.75),
    width: Dimensions.get('window').width - 20,
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
  },
  brandText: {
    position: 'absolute', 
    left: 15,
    bottom: 63,
    padding: 3,
    fontSize: 13,
    color: YELLOW,
    backgroundColor: 'white',
    borderRadius: 5,
    fontFamily: 'Inter-Black',
    textTransform: 'uppercase',
    borderBottomLeftRadius: 5,
    overflow: 'hidden',
  },
  bigText: {
    position: 'absolute', 
    left: 10,
    bottom: 25,
    padding: 5,
    paddingBottom: 0,
    fontSize: 35,
    color: 'white',
    fontFamily: 'Inter-Black',
    overflow: 'hidden', //need to add a height or it just goes to next line
    width: '93%',
  },
  descriptText: {
    position: 'absolute',
    left: 20,
    bottom: 10,
    fontSize: 16,
    color: 'white',
    opacity: 1,
    fontFamily: 'Inter-Light',
  },
  priceText: {
    position: 'absolute',
    right: 15,
    bottom: 35,
    fontSize: 20,
    color: 'white',
    fontFamily: 'Inter-Light',
  },
  sizeText: {
    position: 'absolute',
    top: 20,
    right: 20,
    fontSize: 25,
    color: 'white',

    fontFamily: 'Inter-Bold',
  },
})

export default CardItem;


// export function ListingCard({ onPress, imageSrc, size, brand, title, description, price }) {
//   return (
//     <TouchableOpacity 
//         style={styles.listingCard}
//         activeOpacity={.8}
//         onPress={onPress}
//       >
//         <Image
//           source={imageSrc}
//           style={styles.listingImage}
//         />
//         <LinearGradient
//           colors={['transparent', 'transparent',  'rgba(0,0,0,.6)', 'rgba(0,0,0,1)']}
//           locations={[0.0, 0.7, .85, 1.0]}
//           style={styles.opaqueGradient}
//         >
//         </LinearGradient>
//         <Text style={styles.sizeText}>
//             {size}
//         </Text>
//         <View style={styles.textGroup}>
//           <Text style={styles.brandText}>
//             {brand}
//           </Text>
//           <Text style={styles.bigText}>
//             {title}
//           </Text>
//           <Text style={styles.descriptText}>
//             {description}
//           </Text>
//           <Text style={styles.priceText}>
//             {price}
//           </Text>
//         </View>
//       </TouchableOpacity>
//   );
// }