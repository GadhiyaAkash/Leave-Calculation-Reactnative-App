import React from "react";
import { Image, StyleSheet, Text } from "react-native";

function HeaderTitle() {
    return (
        <>
            <Image
                style={style.imageLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <Text style={{ paddingLeft: 10, fontSize: 20 }}>Header</Text>
        </>
    );
}

const style = StyleSheet.create({
    imageLogo: {
        width: 35, 
        height: 35, 
        paddingRight: 10
    } 
})

export default HeaderTitle;