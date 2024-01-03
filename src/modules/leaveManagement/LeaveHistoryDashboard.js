import { Card, FAB, Text } from "@rneui/themed";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import LeaveHistoryList from "./components/LeaveHistoryList";

export default LeaveHistoryDashboard = ({ navigation }) => {
    const leaveData = [
        {
            id: 'carray_forward_leave',
            title: 'Carray Forward Leave',
            value: 10,
        },
        {
            id: 'cl_taken',
            title: 'CL Taken',
            value: 5,
        },
        {
            id: 'pl_taken',
            title: 'PL Taken',
            value: 2.5,
        },
        {
            id: 'total_available',
            title: 'Total Available Leave',
            value: 22.5,
        }
    ];

    const handleFabPress = () => {
        console.log("fab press");
        navigation.navigate("AddLeave")
    }

    return (
        <>
            <View style={{ height: '36%' }}>
                <FlatList
                    data={leaveData}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <View style={styles.cardContainer}>
                            <Card containerStyle={styles.card}>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Divider />
                                <Text style={styles.cardValue}>
                                    {item.value}
                                </Text>
                            </Card>
                        </View>
                    }
                    keyExtractor={item => item.id}
                />
            </View>
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