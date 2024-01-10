import React from "react";
import { StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

function HeaderTitle() {
    const user = useSelector((state) => state.user.user)
    return (
        <>
            <Text style={{ paddingLeft: 10, fontSize: 20 }}>Welcome {user.full_name}</Text>
        </>
    );
}

export default HeaderTitle;