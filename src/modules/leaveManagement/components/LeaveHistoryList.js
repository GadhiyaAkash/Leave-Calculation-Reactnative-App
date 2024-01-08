import { Card, Text } from "@rneui/themed"
import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import LeaveHistoryLabel from "./LeaveHistoryLabel";

export default LeaveHistoryList = () => {
    const leaveHistory = [
        { id: 1, month: "January", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: 2, month: "February", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: 3, month: "March", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: 4, month: "April", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: 5, month: "May", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: 6, month: "June", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: 7, month: "July", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: 8, month: "August", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: 9, month: "September", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: 10, month: "October", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: 11, month: "November", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 },
        { id: 12, month: "December", total_leave_on_month_start: 10, leave_added: 1.25, cl_taken: 0, pl_taken: 2, available_on_month_end: 15 }
    ]

    return (<>
        <FlatList
            data={leaveHistory}
            renderItem={({ item }) =>
                <View>
                    <Card>
                        <Card.Title>{item.month}</Card.Title>
                        <Card.Divider />
                        <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
                            <LeaveHistoryLabel item={item}/>
                        </View>
                    </Card>
                </View>
            }
            keyExtractor={item => item.id}
        />
    </>)
}