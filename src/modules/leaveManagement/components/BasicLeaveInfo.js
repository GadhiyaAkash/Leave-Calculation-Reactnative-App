import { Card, Text } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

export default BasicLeaveInfo = ({history}) => {
    const [basicInfo, setBasicInfo] = useState([
        {
            id: 'carray_forward_leave',
            title: 'Carray Forward Leave',
            value: 0,
        }
    ]); 

    let totalLeaveOnMonthStart = 0;
    let clTaken = 0, plTaken = 0;

    const getHistoryData = async () => {
        let cloneHistory = [...history];
        cloneHistory = cloneHistory.map((item) => {
            item.total_leave_on_month_start = totalLeaveOnMonthStart;
            item.available_on_month_end = item.total_leave_on_month_start + item.leave_added - item.cl_taken - item.pl_taken;
            totalLeaveOnMonthStart = item.available_on_month_end;
            item.cl_taken = typeof item.cl_taken === 'string' ? parseFloat(item.cl_taken) : item.cl_taken; 
            item.pl_taken = typeof item.pl_taken === 'string' ? parseFloat(item.pl_taken) : item.pl_taken; 
            clTaken = item.cl_taken + clTaken;
            plTaken = item.pl_taken + plTaken;
            return item;
        });
        var dummyArray = [{
            id: 'cl_taken',
            title: 'CL Taken',
            value: clTaken
        }, {
            id: 'pl_taken',
            title: 'PL Taken',
            value: plTaken,
        }, {
            id: 'total_available',
            title: 'Total Available Leave',
            value: totalLeaveOnMonthStart,
        }];
        let cloneInfo = [...basicInfo];
        cloneInfo = [...cloneInfo, ...dummyArray];
        setBasicInfo(cloneInfo);
    };

    useEffect(() => {
        getHistoryData();
    }, []);

    return (
        <FlatList
            data={basicInfo}
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
    )
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
    }
});

