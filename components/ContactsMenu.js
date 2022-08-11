import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AntDesign  from 'react-native-vector-icons/AntDesign'

const contactsMenuButtons = [
    {
        type: "starred",
        name: "Starred"
    },
    {
        type: "contact",
        name: "Itachi Uchiha",
        photo: require('../assets/uchiha2.jpg')
    },
    {
        type: "contact",
        name: "Jocker",
        photo: require('../assets/jocker.jpeg')
    },
    {
        type: "contact",
        name: "Dororo",
        photo: require('../assets/1004865.jpg')
    }
]

function ContactsMenu() {
    return (
        <View style={styles.container}>
            {/* CONTACT CONTAINER */}
            { contactsMenuButtons.map((contact, index) => 
                <View style={styles.row} key={index}>
                    {/* Image */}
                    {contact.type == "starred" ? (
                     <View style={styles.starredIcon}> 
                        <AntDesign name="star" size={30} color="#efefef" />
                     </View> ) : 
                     (
                    <View style={styles.starredIcon}> 
                        <Image source={contact.photo} style={styles.image}/>
                     </View> 
                     )
                    }
                   
                    {/* Text */}
                    <Text style={styles.text}>{contact.name}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    text: {
        color: "white",
        paddingLeft: 15,
        fontSize: 18
    },
    row: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center"
    },
    starredIcon: {
        backgroundColor: "#333333",
        width: 55,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 20
    }
})

export default ContactsMenu;