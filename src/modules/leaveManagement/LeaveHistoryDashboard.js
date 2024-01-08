import { Card, FAB, Text } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import LeaveHistoryList from "./components/LeaveHistoryList";
import BasicLeaveInfo from "./components/BasicLeaveInfo";

export default LeaveHistoryDashboard = ({ navigation }) => {

    const handleFabPress = () => {
        navigation.navigate("AddLeave")
    }

    return (
        <>
            {/* <View style={{ height: "auto", marginBottom: 10 }}>
                <BasicLeaveInfo />
            </View> */}
            <Text h4 style={styles.leaveHistoryTitle}>Leave History</Text>
            <LeaveHistoryList />
            <View style={{ flexGrow: 1 }}>
                <FAB
                    visible={true}
                    icon={{ name: 'add', color: 'white' }}
                    placement="right"
                    onPress={handleFabPress}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flexGrow: 1,
        width: '50%'
    },
    card: {
        minHeight: 120
    },
    cardValue: {
        textAlign: "center"
    },
    leaveHistoryTitle: {
        paddingLeft: 15
    }
});