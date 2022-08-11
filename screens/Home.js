import React from 'react';
import { View, Text ,StyleSheet, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MenuButtons from '../components/MenuButtons';
import ContactsMenu from '../components/ContactsMenu';

function Home( { navigation } ) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewContainer}>
                    {/* Header */}
                    <Header />
                    {/* Searchbar */}
                    <SearchBar />
                    {/* Menu Buttons */}
                    <MenuButtons navigation={navigation} />
                    {/* Contacts Menu */}
                    <ContactsMenu />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#1c1c1c',
    },
    viewContainer: {
        padding: 15
    }
})
export default Home;