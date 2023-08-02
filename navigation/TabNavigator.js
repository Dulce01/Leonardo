import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Inicio from "../screens/Inicio";
import MenuPrincial from '../screens/MenuPrincipal';
import Profile from "../screens/Profile"
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Inicio') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'MenuPrincipal') {
                        iconName = focused ? 'clipboard' : 'clipboard-outline';
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-circle-outline';
                    }



                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Inicio" component={Inicio} options={{headerShown:false}}/>
            <Tab.Screen name="MenuPrincipal" component={MenuPrincial} options={{headerShown:false}}/>
            <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}/>

        </Tab.Navigator>
    );
}

export default BottomTabNavigator
