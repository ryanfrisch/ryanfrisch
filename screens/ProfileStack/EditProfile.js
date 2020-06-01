import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-community/picker';
import { Icon } from '../../App';

/* FIXME add real location */
/* FIXME add real number of listings and changing plural "listing" */

export default function EditProfile({ navigation: { goBack } }) {
  // FIXME remove this counter and add a legit onpress action for edit button
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <LinearGradient
      colors={[BACKGROUND_COLOR, '#D1D1D1']}
      locations={[0.0, 1.0]}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={70}
      >
        <ScrollView>   
            <View style={styles.profileCard}>
            <TouchableOpacity 
                style={styles.editButton}
                onPress={() => goBack()}
                activeOpacity={.5}
            >
                <Icon
                style={{ fontFamily: "LinzIcons" }}
                name='linzIcons-07'
                size='30'
                color='black'
                />
            </TouchableOpacity>
            <View style={styles.imageAndNameContainer}>
                <TouchableOpacity style={styles.imageContainter} activeOpacity={.6}>
                    <Image 
                        style={styles.profileImage}
                        source={require('../../assets/images/my-profile-image.png')}
                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,1)']}
                        locations={[0.0, 1.0]}
                        style={styles.opaqueGradient}
                    >
                    </LinearGradient>
                    <Icon
                        style={styles.pictureIcon}
                        name='linzIcons-11'
                        size='50'
                        color='white'
                    />
                </TouchableOpacity>
                <TextInput 
                    style={styles.editProfileText}
                    autoCapitalize="none"
                    autoCompleteType="name"
                    maxLength="25"
                    // clearButtonMode="while-editing" kind of bulky maybe useful?
                    // caretHidden="false" default mode
                    // clearTextOnFocus="true" clears the text field when tapped
                    // defaultValue="Enter name here" useful for intro sequence
                    // keyboardType="number-pad" useful for email and phone number etc.

                >
                    Ryan Frisch
                </TextInput>
                <Text style={styles.editProfileSubtext}>Provo, UT</Text> 
                <Text style={styles.editProfileSubtext}>0 Listings</Text> 
                
            </View>
            </View>
            <View style={styles.prefCard}>
                <View style={styles.prefColumn}>
                    <PrefItem 
                        iconName={"linzIcons-01"}
                        defaultValue={"male"}
                        placeholder={'gender'}
                    />
                    <PrefItem 
                        iconName={"linzIcons-02"}
                        defaultValue={"medium"}
                        placeholder={'t-shirt size'}
                    />
                    <PrefItem 
                        iconName={"linzIcons-03"}
                        defaultValue={"medium"}
                        placeholder={'waist-size'}
                    />
                    <PrefItem 
                        iconName={"linzIcons-04"}
                        defaultValue={"10\""}
                        placeholder={'shorts inline length'}
                    />
                </View>
                <View style={styles.prefColumn}>
                    <PrefItem 
                        iconName={"linzIcons-05"}
                        defaultValue={"male"}
                        placeholder={'gender'}
                    />
                    <PrefItem 
                        iconName={"linzIcons-06"}
                        defaultValue={"male"}
                        placeholder={'gender'}
                    />
                    <PrefItem 
                        iconName={"linzIcons-07"}
                        defaultValue={"male"}
                        placeholder={'gender'}
                    />
                    <PrefItem 
                        iconName={"linzIcons-08"}
                        defaultValue={"male"}
                        placeholder={'gender'}
                    />
                </View>
            </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

function PrefItem({ iconName, color, placeholder, defaultValue}) {
    color = 'black';
    //const [value, onChangeText] = React.useState('Useless Placeholder');
    
    return (
      <View style={styles.prefItem}> 
        <Icon
            style={styles.prefIcon}
            name={iconName}
            size='40'
            color={color}
        />

        <TextInput 
            style={styles.prefInput}
            autoCapitalize="none"
            autoCompleteType="name"
            maxLength="5"
            placeholder={placeholder}
            placeholderTextColor='black'
            defaultValue={defaultValue}
            returnKeyType='done'
            //onChangeText={text => onChangeText(text)}
            //value={value}
            // onSubmitEditing= {nativeEvent: {Text, eventCount, target}}
            // onEndEditing?

            // textContentType='none' // use for autofill of literally all personal info
            // clearButtonMode="while-editing" kind of bulky maybe useful?
            // caretHidden="false" default mode
            // clearTextOnFocus="true" clears the text field when tapped
            // keyboardType="number-pad" useful for email and phone number etc.
        >
        </TextInput>
      </View>
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
    alignSelf: 'flex-start',
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
  imageContainter: {
    height: 200,
    width: 200,
    overflow: 'hidden',
    borderColor: "#ECECEC",
    borderWidth: 7,
    borderRadius: IMAGE_CURVE_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  profileImage: {
    height: 200,
    width: 200,
    overflow: 'hidden',
    borderRadius: IMAGE_CURVE_RADIUS,
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  pictureIcon: {
    position: 'absolute',
    bottom: 65,
    fontFamily: "LinzIcons",
  },
  editProfileText: {
    color: 'black',
    fontSize: 30,
    fontWeight: "500",
    fontFamily: 'Inter-Black',
    backgroundColor: '#E8E8E8',
    borderRadius: 7,
    marginTop: 5,
    marginBottom: 7,
    padding: 2,
    paddingHorizontal: 6,
  },
  editProfileSubtext: {
    fontFamily: 'Inter-Light',
    fontSize: 15,
  },

  prefCard: {
    flexDirection: "row",
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
  prefColumn: {
    flex: 1,
  },
  prefItem: {
    flexDirection: "row",
    //backgroundColor: 'black',
    width: '100%',
  },
  prefIcon: {
    fontFamily: "LinzIcons",
  },
  prefInput: {
    fontFamily: 'Inter-Light',
    fontSize: 16,
    color: 'black',
    backgroundColor: '#E8E8E8',
    borderRadius: 7,
    marginTop: 5,
    marginBottom: 7,
    padding: 2,
    paddingHorizontal: 6,
  },
});




//Use the following for sequences (aka intro sequence or new listing sequence)
//<Button title="Go to Home" onPress={() => navigation.navigate('Home', { /* add params here */ })} />
//<Button title="Go back" onPress={() => navigation.goBack()} />
