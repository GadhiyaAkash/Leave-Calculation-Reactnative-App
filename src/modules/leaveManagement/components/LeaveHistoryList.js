import { Card } from "@rneui/themed"
import { StyleSheet, View } from "react-native";
import React from "react";
import LeaveHistoryLabel from "./LeaveHistoryLabel";

export default LeaveHistoryList = ({ history }) => {
    return (<>
        <View>
            {
                history.map((item) => {
                    return (
                        <Card key={item.id} containerStyle={styles.card}>
                            <Card.Title>{item.month}</Card.Title>
                            <Card.Divider />
                            <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
                                <LeaveHistoryLabel item={item} />
                            </View>
                        </Card>
                    )
                })
            }
        </View>
    </>)
}

const styles = StyleSheet.create({
    card: {
        minHeight: 120,
        borderRadius: 15
    }
});