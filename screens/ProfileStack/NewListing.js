import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-community/picker';
import CardStack, { Card } from 'react-native-card-stack-swiper';


export default function NewListingScreen({ navigation }) {  
  // for picker 
  //const [selectedValue, setSelectedValue] = useState("java");

  return (
    <CardStack style={styles.content} ref={swiper => { this.swiper = swiper }}>
      <Card style={[styles.card, styles.card1]}><Text style={styles.label}>A</Text></Card>
      <Card style={[styles.card, styles.card2]}><Text style={styles.label}>B</Text></Card>
      <Card style={[styles.card, styles.card1]}><Text style={styles.label}>C</Text></Card>
    </CardStack>
    // <LinearGradient
    //   colors={[BACKGROUND_COLOR, '#D1D1D1']}
    //   locations={[0.0, 1.0]}
    //   style={styles.container}
    // >
    //   <KeyboardAvoidingView 
    //     style={styles.testInput}
    //     behavior={Platform.OS == "ios" ? "padding" : "height"}
    //     keyboardVerticalOffset={80}
    //   >
    //     <TextInput >
    //         Add a new listing
    //     </TextInput>
    //     {/* <Picker
    //         selectedValue={selectedValue}
    //         style={{ height: 50, width: 150 }}
    //         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    //     >
    //         <Picker.Item label="Java" value="java" />
    //         <Picker.Item label="JavaScript" value="js" />
    //     </Picker> */}
    //   </KeyboardAvoidingView>
    // </LinearGradient>
  );
}

// style constants
const IMAGE_CURVE_RADIUS = 100;
const TEAL = '#4EE2C6';
const PURPLE = '#661DCE';
const RED = '#EE2C50';
const YELLOW = '#FDBD1A';
const BACKGROUND_COLOR = '#F2F2F2';

const styles = StyleSheet.create({
  testInput: {
    position: 'absolute',
    //backgroundColor: 'black',
    bottom: 0,
  },
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
    fontFamily: 'Inter-Black'
  },
  profileSubtext: {
    fontFamily: 'Inter-Light',
    fontSize: 15,
  },
});

//Use the following for sequences (aka intro sequence or new listing sequence)
//<Button title="Go to Home" onPress={() => navigation.navigate('Home', { /* add params here */ })} />
//<Button title="Go back" onPress={() => navigation.goBack()} />
