import { StyleSheet } from 'react-native';

// style constants
// const PREFER_BUTTON_CURVE_RADIUS = 20; NO LONGER USED
const IMAGE_CURVE_RADIUS = 100;
const TEAL = '#4EE2C6';
const PURPLE = '#661DCE';
const RED = '#EE2C50';
const YELLOW = '#FDBD1A';
const BUTTON_W_H = 80;

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: "stretch",
      },
      
    
    // profile image styling
    profileCard: {
        backgroundColor: '#fbfbfb',
        padding: 20,
        margin: 30,
        marginBottom: 10,
        alignItems: "center",
        borderRadius: 12,    
        ...Platform.select({
            ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 9,
            },
            android: {
            elevation: 20,
            },
        }),
    },
    editButton: {
    backgroundColor: TEAL,
    alignSelf: 'flex-end',
    height: 33,
    width: 33,
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
    borderColor: TEAL,
    borderWidth: 7,
    borderRadius: IMAGE_CURVE_RADIUS,
    },
    profileText: {
    marginTop: 5,
    color: 'black',
    fontSize: 30,
    fontWeight: "500",
    //fontFamily: FIXME ADD CUSTOM FONT
    },
    
    // LISTINGS
    allListings: {
    ...Platform.select({
        ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 9,
        },
        android: {
        elevation: 20,
        },
    }),
    backgroundColor: '#fbfbfb',
    padding: 6,
    margin: 30,
    marginBottom: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 15,
    },
    listingThumbnail: {
    borderRadius: 7,
    margin: 5,
    marginBottom: 7,
    height: 90,
    width: 90,
    backgroundColor: TEAL,
    alignItems: "center",
    justifyContent: "center",
    },

      
    listingCard: {
    flex: 3,
    backgroundColor: '#fbfbfb',
    padding: 20,
    margin: 30,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 12,    
    ...Platform.select({
        ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 9,
        },
        android: {
        elevation: 20,
        },
    }),
    },
    swipeButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    marginTop: -10,
    },

    instantBuyButton: {
    backgroundColor: 'green',
    height: BUTTON_W_H * .8,
    width: BUTTON_W_H * .8,
    borderRadius: BUTTON_W_H * .8 * .5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 18,
    },
    likeButton: {
    backgroundColor: 'green',
    height: BUTTON_W_H,
    width: BUTTON_W_H,
    borderRadius: BUTTON_W_H * .5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    },
    dislikeButton: {
    backgroundColor: 'red',
    height: BUTTON_W_H,
    width: BUTTON_W_H,
    borderRadius: BUTTON_W_H * .5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    },
});
