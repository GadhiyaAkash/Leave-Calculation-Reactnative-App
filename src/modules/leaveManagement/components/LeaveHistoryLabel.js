import React from "react"
import { Text } from "@rneui/themed"
import { StyleSheet, View } from "react-native"

export default LeaveHistoryLabel = ({ item }) => {

    const slugs = ['total_leave_on_month_start', 'leave_added', 'cl_taken', 'pl_taken', 'available_on_month_end']

    const getHistoryContentLabel = (slug) => {
        switch (slug) {
            case 'total_leave_on_month_start':
                return "Leave On Month Start";
            case 'leave_added':
                return "Leave Added";
            case 'cl_taken':
                return "CL Taken";
            case 'pl_taken':
                return "PL Taken";
            case 'available_on_month_end':
                return "Leave On Month End";
            default:
                break;
        }
    }

    return (
        <View style={styles.container}>
            {
                slugs.map((slug, inx) =>
                    <View key={inx} style={styles.viewCard}>
                        <Text style={styles.label}>
                            {getHistoryContentLabel(slug)}
                        </Text>
                        <Text>
                            {item[slug]}
                        </Text>
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        flexWrap: "wrap"   
    },
    viewCard: {
        width: '50%',
        paddingBottom: 15
    },
    label: {
        fontWeight: "bold"
    }
});