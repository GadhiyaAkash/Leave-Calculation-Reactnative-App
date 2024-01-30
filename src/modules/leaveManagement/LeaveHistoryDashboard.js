import { FAB, Text, useTheme } from "@rneui/themed";
import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import LeaveHistoryList from "./components/LeaveHistoryList";
import BasicLeaveInfo from "./components/BasicLeaveInfo";
import { getAllHistory } from "../../core/localDatabase/SqlQuery";
import { LEAVE_CONST, MonthlyLeaveAdded, TotalCL, defaultHistoryData } from "./constant";
import { useSelector } from "react-redux";

export default LeaveHistoryDashboard = ({ navigation }) => {
    const [basicInfo, setBasicInfo] = useState({});
    const [loaded, setLoaded] = useState(false);
    const user = useSelector((state) => state.user.user)
    const [refreshing, setRefreshing] = useState(false);
    const [history, setHistory] = useState([]);
    const { theme } = useTheme();
    let totalLeaveOnMonthStart = user.carray_forward_leave;
    let clTaken = 0;
    let plTaken = 0;

    const handleFabPress = () => {
        navigation.navigate("AddLeave")
    }

    const getHistoryData = async () => {
        let res = await getAllHistory();
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
            item.leave_added = (item.id === 1) ? (5 + MonthlyLeaveAdded) : MonthlyLeaveAdded;
            item.available_on_month_end = parseFloat(item.total_leave_on_month_start) + parseFloat(item.leave_added) - parseFloat(item.cl_taken) - parseFloat(item.pl_taken);
            totalLeaveOnMonthStart = item.available_on_month_end;
            clTaken = parseFloat(item.cl_taken) + clTaken;
            plTaken = parseFloat(item.pl_taken) + plTaken;
            return item;
        });
        setHistory(cloneHistory);
        setBasicInfo([
            {
                id: LEAVE_CONST.CL_TAKEN,
                title: 'Casual Leave(CL)',
                remaining: TotalCL,
                value: clTaken
            },
            {
                id: LEAVE_CONST.PL_TAKEN,
                title: 'Earned Leave',
                value: plTaken,
            },
            {
                id: LEAVE_CONST.CARRAY_FORWARD_LEAVE,
                title: 'Carray Forward Leave',
                value: parseFloat(user.carray_forward_leave),
            },
            {
                id: LEAVE_CONST.TOTAL_AVAILABLE,
                title: 'Total Leave',
                value: totalLeaveOnMonthStart,
            }
        ]);
        setLoaded(true);
        setRefreshing(false);
    };

    const onRefresh = useCallback(() => {
        setLoaded(false);
        setRefreshing(true);
        reloadData();
    }, []);

    const reloadData = () => {
        totalLeaveOnMonthStart = user.carray_forward_leave;
        clTaken = 0;
        plTaken = 0;
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
                                <BasicLeaveInfo basicInfo={basicInfo} />
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