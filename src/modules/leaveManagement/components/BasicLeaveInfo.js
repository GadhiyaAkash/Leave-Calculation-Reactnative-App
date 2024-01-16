import { Card, Text } from "@rneui/themed";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { LEAVE_CONST } from "../constant";

export default BasicLeaveInfo = ({ basicInfo }) => {

    return (
        <FlatList
            data={basicInfo}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) =>
                <View style={styles.cardContainer}>
                    <Card containerStyle={styles.card}>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Divider />
                        <View>
                            {
                                [LEAVE_CONST.CARRAY_FORWARD_LEAVE, LEAVE_CONST.PL_TAKEN, LEAVE_CONST.TOTAL_AVAILABLE].indexOf(item.id) !== -1 &&
                                <>
                                    <Text style={styles.cardValue}>
                                        {item.value}
                                    </Text>
                                </>
                            }
                            {
                                [LEAVE_CONST.CL_TAKEN].indexOf(item.id) !== -1 &&
                                <View>
                                    <Text>Taken: {item.taken}</Text>
                                    <Text>Remaining: {item.remaining}</Text> 
                                </View>
                            }
                        </View>
                    </Card>
                </View>
            }
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        minWidth: 220
    },
    card: {
        minHeight: 125,
        borderRadius: 15
    },
    cardValue: {
        textAlign: "center"
    }
});

