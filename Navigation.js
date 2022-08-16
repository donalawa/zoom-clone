import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home';
import MeetingRoom from './screens/MeetingRoom';


function Navigation() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName={Home}
            // screenOptions={{
            //     headerShown: false
            // }}
            >
            <Stack.Screen 
                name="Home"
                component={Home}
                options={
                    {
                        headerShown: false
                    }
                }
            />
            <Stack.Screen 
                name="Room"
                component={MeetingRoom}
                options={{
                    title: "Start a new meeting",
                    headerStyle: {
                        backgroundColor: "#1c1c1c",
                        shadowOpacity: 0
                    },
                    headerTintColor: "white"
                }}
            />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

 export default Navigation;