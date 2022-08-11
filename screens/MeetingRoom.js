import { View, Text, StyleSheet, StatusBar } from 'react-native'

function MeetingRoom() {
    return (
        <View style={styles.container}>
            <Text>Meeting Room Text</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
})

export default MeetingRoom;
