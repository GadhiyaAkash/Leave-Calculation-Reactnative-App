import React, { useEffect } from "react";
import { Image, StyleSheet, Text } from "react-native";

function HeaderTitle() {
    
    const getPersonalData = async () => {
        let res = await getPersonalInfo();
    };

    useEffect(() => {
        getPersonalData();
    }, [])
    return (
        <>
            {/* <Image
                style={style.imageLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            /> */}
            <Text style={{ paddingLeft: 10, fontSize: 20 }}>Leave Management</Text>
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