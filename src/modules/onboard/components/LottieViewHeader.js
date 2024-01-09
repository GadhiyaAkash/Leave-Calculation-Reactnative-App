import { makeStyles } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

export default LottieViewHeader = () => {
    const styles = useStyles();
    return (
        <View style={styles.lottieContainer}>
            <LottieView style={styles.lottieFile} source={require('../../../../assets/lottie/onboarding.json')} autoPlay loop />
        </View>
    )
}

const useStyles = makeStyles((theme) => ({
    lottieContainer: {
        backgroundColor: theme.colors.primary,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    lottieFile: {
        height: 385
    }
}));