import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { ListingCard } from './HomeScreen';
import { Icon } from '../App';

export default function CardDisplayListingScreen({ navigation: { goBack } }) {
  // FIXME remove this counter and add a legit onpress action for edit button
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  
  // for picker 
  //const [selectedValue, setSelectedValue] = useState("java");

  return (
      <LinearGradient
      colors={[BACKGROUND_COLOR, '#D5D5D5']}
      locations={[0.0, 1.0]}
      style={styles.container}
    >
      <ScrollView>
        <ListingCard
          onPress={() => goBack()}
          imageSrc={require('../assets/images/clothingDemos/KOPT/aeModelledGreenDress.jpg')}
          size={'S'}
          brand={'AMERICAN EAGLE'}
          title={'cute sundress!'}
          description={'just trying to get rid of it, plz come get it rn'}
          price={'$10'}
        />
        <View style={styles.detailCard}>
        <View style={styles.detailColumn}>
                  <DetailItem 
                      iconName={"gender"}
                      detail={'small'}
                  />
                  <DetailItem 
                      iconName={"cash"}
                      detail={'small'}
                  />
                  <DetailItem 
                      iconName={"filter"}
                      detail={'small'}
                  />
                  <DetailItem 
                      iconName={"optionsBars"}
                      detail={'small'}
                  />
              </View>
              <View style={styles.detailColumn}>
                  <DetailItem 
                      iconName={"location"}
                      detail={'small'}
                  />
                  <DetailItem 
                      iconName={"share"}
                      detail={'small'}
                  />
                  <DetailItem 
                      iconName={"backArrow"}
                      detail={'small'}
                  />
                  <DetailItem 
                      iconName={"rewind"}
                      detail={'small'}
                  />
              </View>
          </View>
      </ScrollView>
    </LinearGradient>
  );
}

function DetailItem({ iconName, color, detail}) {
  color = 'black';
  //const [value, onChangeText] = React.useState('Useless Placeholder');
  
  return (
    <View style={styles.detailItem}> 
      <Icon
          style={styles.detailIcon}
          name={iconName}
          size='40'
          color={color}
      />

      <Text style={styles.detailText}>
        {detail}
      </Text>
    </View>
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
  detailCard: {
    flexDirection: "row",
    backgroundColor: '#fbfbfb',
    padding: 20,
    margin: 10,
    marginTop: 25,
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
  detailColumn: {
    flex: 1,
  },
  detailItem: {
    flexDirection: "row",
    //backgroundColor: 'black',
    width: '100%',
  },
  detailIcon: {
    fontFamily: "LinzIcons",
  },
  detailText: {
    fontFamily: 'Inter-Light',
    fontSize: 16,
    color: 'black',
    //backgroundColor: '#E8E8E8',
    //borderRadius: 7,
    marginTop: 5,
    marginBottom: 7,
    padding: 2,
    paddingHorizontal: 6,

  },
});

//Use the following for sequences (aka intro sequence or new listing sequence)
//<Button title="Go to Home" onPress={() => navigation.navigate('Home', { /* add params here */ })} />
//<Button title="Go back" onPress={() => navigation.goBack()} />
