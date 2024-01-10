import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderTitle from './HeaderTitle';
import LeaveHistoryDashboard from '../../modules/leaveManagement/LeaveHistoryDashboard';
import LeaveAddScreen from '../../modules/leaveManagement/LeaveAddScreen';
import WelcomeScreen from '../../modules/onboard/WelcomeScreen';
import StartupScreen from '../../modules/onboard/StartupScreen';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

function AppNavigation() {
    const user = useSelector((state) => state.user.user);
    console.log("user::", user);
    return (
        <>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        {
                            (user == null) ?
                                <Stack.Group screenOptions={{
                                    headerShown: false,
                                    animation: 'none'
                                }}>
                                    <Stack.Screen name="StartupScreen" component={StartupScreen} />
                                    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                                </Stack.Group>
                                :
                                <Stack.Group screenOptions={{
                                    headerBackVisible: false,
                                    animation: 'none',
                                    headerTitle: (props) => <HeaderTitle {...props} />
                                }}>
                                    <Stack.Screen name="LeaveHistory" component={LeaveHistoryDashboard} />
                                    <Stack.Screen name="AddLeave" component={LeaveAddScreen} />
                                </Stack.Group>
                        }
                    </Stack.Navigator>
                </NavigationContainer>
                <StatusBar style="auto" />
            </SafeAreaProvider>
        </>
    );
}
export default AppNavigation;   