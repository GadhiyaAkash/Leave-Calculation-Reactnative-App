import { Button, Card, Icon, ListItem, Text, useTheme } from "@rneui/themed";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

function HomeScreen({ navigation }) {
    const theme = useTheme();
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

    const leaveHistory = [
        { id: "1", month: "January", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: "2", month: "February", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: "3", month: "March", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: "4", month: "April", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: "5", month: "May", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: "6", month: "June", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: "7", month: "July", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: "8", month: "August", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: "9", month: "September", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: "10", month: "October", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: "11", month: "November", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: "12", month: "December", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 }
    ]

    const getHistoryContentLabel = (slug) => {
        switch (slug) {
            case 'total_leave_on_month_start':
                return "Leave On Month Start";
            case 'leave_added':
                return "Leave Added";
            case 'cl_taken':
                return "CL Taken";
            case 'pl_taken':
                return "PL Taken";
            case 'available_on_month_end':
                return "Leave On Month End";
            default:
                break;
        }
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
            <View>
                <Text h4 style={styles.leaveHistoryTitle}>Leave History</Text>
                <FlatList
                    data={leaveHistory}
                    renderItem={({ item }) =>
                        <View>
                            <Card>
                                <Card.Title>{item.month}</Card.Title>
                                <Card.Divider />
                                <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
                                    <View style={{ width: '50%' }}>
                                        <Text style={styles.label}>Leave On Month Start</Text>
                                        <Text>
                                            {item.total_leave_on_month_start}
                                        </Text>
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <Text style={styles.label}>Leave Added</Text>
                                        <Text>
                                            {item.leave_added}
                                        </Text>
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <Text style={styles.label}>Leave Added</Text>
                                        <Text>
                                            {item.leave_added}
                                        </Text>
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <Text style={styles.label}>Leave Added</Text>
                                        <Text>
                                            {item.leave_added}
                                        </Text>
                                    </View>
                                </View>
                            </Card>
                        </View>
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
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
    },
    label: {
        fontWeight: "bold"
    }
});


export default HomeScreen;