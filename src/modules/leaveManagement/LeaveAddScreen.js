import { Text } from "@rneui/themed"
import React from "react"
import { StyleSheet, View } from "react-native"

/**
 * Create a form with list of below input elements
 * Create list of month dropdown. Default value is January
 * Create a number fields CL and PL with  default value is 0.
 * Create two button Cancel and Submit. Validation should be fire on submit button
 */
export default LeaveAddScreen = () => {
    return (
        <View style={styles.container}>
            <Text h4 style={styles.title}>Add New Leave</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    title: {
        textAlign: "center",
        paddingVertical: 15
    }
})