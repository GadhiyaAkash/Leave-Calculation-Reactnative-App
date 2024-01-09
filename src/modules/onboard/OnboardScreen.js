import { Text, makeStyles } from "@rneui/themed";
import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";
import SafeAreaContainer from "../../core/wrappers/SafeAreaContainer";
import LoadingButton from "../../core/wrappers/LoadingButton";

const OnboardScreen = () => {
    const styles = useStyles();
    return (
        <SafeAreaContainer>
            <View style={styles.lottieContainer}>
                <LottieView style={styles.lottieFile} source={require('../../../assets/lottie/onboarding.json')} autoPlay loop />
            </View>
            <View style={styles.childContainer}>
                <Text h2>Welcome!</Text>
                <Text style={styles.subTitle}>Consolidate leave applications for streamlined tracking</Text>
                <LoadingButton name="Get Started" />
            </View>
        </SafeAreaContainer>
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
    },
    childContainer: {
        padding: 20,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    subTitle: {
        paddingBottom: 60,
        fontSize: 12
    }
}));

export default OnboardScreen;