import React from "react"
import { Text } from "@rneui/themed"
import { StyleSheet, View } from "react-native"
import { MonthlyLeaveAdded, TotalCL } from "../constant";

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
                        <Text>
                            {getHistoryContentLabel(slug)}
                        </Text>
                        <Text>
                            {
                                (item.id == 1 && slug === 'leave_added') ? <Text>{item[slug]} <Text style={{ fontStyle:"italic", fontSize: 12, fontWeight: "bold" }}>({TotalCL}(CL) + {MonthlyLeaveAdded})</Text></Text> : item[slug]
                            }
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
    }
});