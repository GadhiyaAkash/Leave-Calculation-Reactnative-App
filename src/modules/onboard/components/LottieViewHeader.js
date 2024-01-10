import { makeStyles } from "@rneui/themed";
import React from "react";
import { Dimensions, View } from "react-native";
import LottieView from "lottie-react-native";

export default LottieViewHeader = () => {
    const styles = useStyles();

    const screenHeight = Dimensions.get('window').height;
    const imageHeight = screenHeight * 0.50;

    return (
        <View style={styles.lottieContainer}>
            <LottieView style={{ height: imageHeight }} source={require('../../../../assets/lottie/onboarding.json')} autoPlay loop />
        </View>
    )
}

const useStyles = makeStyles((theme) => ({
    lottieContainer: {
        backgroundColor: theme.colors.primary,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    }
}));