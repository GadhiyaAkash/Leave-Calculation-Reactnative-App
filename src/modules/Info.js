import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";


function InfoScreen({ navigation, route }) {

    return (
        <View style={styles.container}>
            <Text>You are seeing details!</Text>
            <Button title="Update Header Title" onPress={() => navigation.setOptions({ title: 'Updated!' })}></Button>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default InfoScreen;