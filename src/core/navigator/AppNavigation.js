import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../modules/Dashboard';
import InfoScreen from '../../modules/Info';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderTitle from './HeaderTitle';

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ 
                        headerBackVisible: false, 
                        animation: 'none',
                        headerTitle: (props) => <HeaderTitle {...props} /> }}>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Info" component={InfoScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
                <StatusBar style="auto" />
            </SafeAreaProvider>
        </>
    );
}
export default AppNavigation;   