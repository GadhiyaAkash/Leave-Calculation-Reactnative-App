import { Card, FAB, Text } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import LeaveHistoryList from "./components/LeaveHistoryList";
import BasicLeaveInfo from "./components/BasicLeaveInfo";
import { getAllManualLists } from "../../core/localDatabase/SqlQuery";
import { defaultHistoryData } from "./constant";

export default LeaveHistoryDashboard = ({ navigation }) => {
    const [loaded, setLoaded] = useState(false);
    const handleFabPress = () => {
        navigation.navigate("AddLeave")
    }

    
    const [history, setHistory] = useState([]);

    let totalLeaveOnMonthStart = 0;
    const monthlyLeave = 1.25;

    const getHistoryData = async () => {
        let res = await getAllManualLists();
        let cloneHistory = [...defaultHistoryData];
        cloneHistory = cloneHistory.map((item) => {
            if (res.length) {
                let hasData = res.find((data1) => {
                    return data1.id === item.id;
                });
                if (hasData) {
                    item.cl_taken = hasData.cl_taken;
                    item.pl_taken = hasData.pl_taken;
                }
            }
            item.total_leave_on_month_start = totalLeaveOnMonthStart;
            item.leave_added = monthlyLeave;
            item.available_on_month_end = item.total_leave_on_month_start + item.leave_added - item.cl_taken - item.pl_taken;

            totalLeaveOnMonthStart = item.available_on_month_end;
            return item;
        });
        setHistory(cloneHistory);
        setLoaded(true)
    };
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            totalLeaveOnMonthStart = 0;
            getHistoryData();
        });
    
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
      }, [navigation]);

    return (
        <>
            <View style={{ height: "auto", marginBottom: 10 }}>
                {
                    loaded &&
                    <BasicLeaveInfo history={history} />
                }
            </View>
            <Text h4 style={styles.leaveHistoryTitle}>Leave History</Text>
            <LeaveHistoryList history={history} />
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