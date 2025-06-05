import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, LoginScreen, ProfileScreen, RegisterScreen } from '@containers';

const hidHeader = { headerShown: false };

export function NavigationApp() {
    const Stack = createNativeStackNavigator();
    function AuthStack() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={hidHeader}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={hidHeader}

                />
            </Stack.Navigator>
        )
    }

    const Tab = createBottomTabNavigator();

    function MainApp() {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                />
            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Autentication">
                <Stack.Screen
                    name="Autentication"
                    component={AuthStack}
                    options={hidHeader}
                />
                <Stack.Screen
                    name="MainApp"
                    component={MainApp}
                    options={hidHeader}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}