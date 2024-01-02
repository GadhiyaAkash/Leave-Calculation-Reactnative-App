import { Button } from "@rneui/themed";
import React from "react";
import { StyleSheet, View } from "react-native";

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Button title="My Button" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});


export default HomeScreen;