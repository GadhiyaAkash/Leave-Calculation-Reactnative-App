import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderTitle from './HeaderTitle';
import LeaveHistoryDashboard from '../../modules/leaveManagement/LeaveHistoryDashboard';
import LeaveAddScreen from '../../modules/leaveManagement/LeaveAddScreen';
import OnboardScreen from '../../modules/onboard/OnboardScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
    let hasUserName = true;
    return (
        <>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        {
                            hasUserName ?
                                <Stack.Group screenOptions={{
                                    headerShown: false,
                                    animation: 'none',
                                }}>
                                    <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
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