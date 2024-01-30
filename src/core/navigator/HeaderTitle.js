import { Header, Icon, useTheme } from "@rneui/themed";
import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";

function HeaderTitle() {
    const user = useSelector((state) => state.user.user);
    const { theme } = useTheme();
    const { width } = useWindowDimensions();
    return (
        <Header
        containerStyle={styles.container}
            leftComponent={() => {
                return (
                    <View style={{ width: (width - 100)}}>
                        <Text style={styles.headerTitle}>Welcome {user.full_name}</Text>
                    </View>
                )
            }}
            rightComponent={() => {
                return (
                    <Icon name="setting" type="antdesign" color={theme.colors.primary} size={24} />
                )
            }}
            backgroundColor={"#fff"}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    headerTitle: {
        textTransform: "capitalize",
        fontSize: 20
    }
})
export default HeaderTitle;