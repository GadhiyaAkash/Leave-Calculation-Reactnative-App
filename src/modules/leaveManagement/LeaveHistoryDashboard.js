import { FAB, Text, useTheme } from "@rneui/themed";
import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import LeaveHistoryList from "./components/LeaveHistoryList";
import BasicLeaveInfo from "./components/BasicLeaveInfo";
import { getAllManualLists } from "../../core/localDatabase/SqlQuery";
import { defaultHistoryData } from "./constant";

export default LeaveHistoryDashboard = ({ navigation }) => {
    const [loaded, setLoaded] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [history, setHistory] = useState([]);
    const { theme } = useTheme();
    let totalLeaveOnMonthStart = 0;
    const monthlyLeave = 1.25;

    const handleFabPress = () => {
        navigation.navigate("AddLeave")
    }

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
        setLoaded(true);
        setRefreshing(false);
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        reloadData();
    }, []);

    const reloadData = () => {
        totalLeaveOnMonthStart = 0;
        getHistoryData();
    }
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            reloadData();
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <>
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                refreshControl={
                    <RefreshControl progressViewOffset={20} refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <>
                    {
                        loaded &&
                        <>
                            <View style={{ height: "auto", marginBottom: 10 }}>
                                <BasicLeaveInfo history={history} />
                            </View>
                            <Text h4 style={styles.leaveHistoryTitle}>Leave History</Text>
                            <LeaveHistoryList history={history} />
                        </>
                    }
                </>
            </ScrollView>
            <FAB
                visible={true}
                icon={{ name: 'add', color: 'white' }}
                placement="right"
                color={theme.colors.primary}
                onPress={handleFabPress}
            />
        </>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 15
    },
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