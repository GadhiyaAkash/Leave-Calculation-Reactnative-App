import { Card } from "@rneui/themed"
import { FlatList, View } from "react-native";
import React, { useEffect, useState } from "react";
import LeaveHistoryLabel from "./LeaveHistoryLabel";
import { getAllManualLists } from "../../../core/localDatabase/SqlQuery";

export default LeaveHistoryList = () => {
    const [history, setHistory] = useState(
        [
            { id: 1, month: "January", cl_taken: 0, pl_taken: 0 },
            { id: 2, month: "February", cl_taken: 0, pl_taken: 0 },
            { id: 3, month: "March", cl_taken: 0, pl_taken: 0 },
            { id: 4, month: "April", cl_taken: 0, pl_taken: 0 },
            { id: 5, month: "May", cl_taken: 0, pl_taken: 0 },
            { id: 6, month: "June", cl_taken: 0, pl_taken: 0 },
            { id: 7, month: "July", cl_taken: 0, pl_taken: 0 },
            { id: 8, month: "August", cl_taken: 0, pl_taken: 0 },
            { id: 9, month: "September", cl_taken: 0, pl_taken: 0 },
            { id: 10, month: "October", cl_taken: 0, pl_taken: 0 },
            { id: 11, month: "November", cl_taken: 0, pl_taken: 0 },
            { id: 12, month: "December", cl_taken: 0, pl_taken: 0 }
        ]
    );

    let totalLeaveOnMonthStart = 0;
    const monthlyLeave = 1.25;

    const getHistoryData = async () => {
        let res = await getAllManualLists();
        let cloneHistory = [...history];
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
    };

    useEffect(() => {
        getHistoryData();
    }, []);




    return (<>
        <FlatList
            data={history}
            renderItem={({ item }) =>
                <View>
                    <Card>
                        <Card.Title>{item.month}</Card.Title>
                        <Card.Divider />
                        <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
                            <LeaveHistoryLabel item={item} />
                        </View>
                    </Card>
                </View>
            }
            keyExtractor={item => item.id}
        />
    </>)
}