import { Card, Text } from "@rneui/themed";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

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
        minWidth: 220,
        
    },
    card: {
        minHeight: 120,
        borderRadius: 15
    },
    cardValue: {
        textAlign: "center"
    }
});

