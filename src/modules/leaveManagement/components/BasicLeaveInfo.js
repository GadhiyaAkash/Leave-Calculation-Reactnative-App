import { Card, Text } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { getAllManualLists } from "../../../core/localDatabase/SqlQuery";

export default BasicLeaveInfo = () => {
    const [basicInfo, setBasicInfo] = useState([
        {
            id: 'carray_forward_leave',
            title: 'Carray Forward Leave',
            value: 10,
        }
    ]);

    function sumArrayElements(arr) {
        let sum = 0;
        for (let element of arr) {
            if (typeof element === 'string') {
                sum += parseFloat(element) || 0;
            } else if (typeof element === 'number') {
                sum += element;
            }
        }
        return sum;
    }

    const getTotalCL = (allData, key) => {
        let data = allData.map((data) => {
            return data[key];
        });
        data = sumArrayElements(data);
        return data;
    }

    const getLists = async (data) => {
        const res = await getAllManualLists();
        return res;
    };

    const getHistoryData = async (data) => {
        let res = await getLists();
        let cloneInfo = [...basicInfo];
        var dummyArray = [{
            id: 'cl_taken',
            title: 'CL Taken',
            value: getTotalCL(res, 'cl_taken')
        }, {
            id: 'pl_taken',
            title: 'PL Taken',
            value: getTotalCL(res, 'pl_taken'),
        }, {
            id: 'total_available',
            title: 'Total Available Leave',
            value: 'TODO',
        }];
        cloneInfo = [...basicInfo, ...dummyArray]
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

