import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderTitle from './HeaderTitle';
import LeaveHistoryDashboard from '../../modules/leaveManagement/LeaveHistoryDashboard';
import LeaveAddScreen from '../../modules/leaveManagement/LeaveAddScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerBackVisible: false,
                            animation: 'none',
                            headerTitle: (props) => <HeaderTitle {...props} />
                        }}>
                        <Stack.Screen name="LeaveHistory" component={LeaveHistoryDashboard} />
                        <Stack.Screen name="AddLeave" component={LeaveAddScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
                <StatusBar style="auto" />
            </SafeAreaProvider>
        </>
    );
}
export default AppNavigation;   