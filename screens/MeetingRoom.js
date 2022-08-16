import { View, Text, StyleSheet, StatusBar, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import StartMeeting from '../components/StartMeeting';
import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

let socket;

function MeetingRoom() {
    const [name, setName] = useState();
    const [roomId, setRoomId] = useState();
    const [ activeUsers, setActiveUsers ] = useState();

    const joinRoom = () => {
        socket.emit('join-room', { roomId: roomId, userName: name})
    }


    useEffect(() => {
        const API_URL = "https://d561-129-0-76-243.eu.ngrok.io";
        socket = io(`${API_URL}`);
        socket.on("connection", () => console.log('Connected'));
        socket.on("all-users", users => {
            console.log("ACTIVE USERS");
            console.log(users)
            setActiveUsers(users);
        })
    },[])

    return (
        <View style={styles.container}>
            {/* START MEETING  SECTION */}
            <StartMeeting
                name={name}
                setName={setName}
                roomId={roomId}
                setRoomId={setRoomId}
                joinRoom={joinRoom}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        flex: 1
    },
 
})

export default MeetingRoom;
