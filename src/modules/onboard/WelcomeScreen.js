import { Text, makeStyles } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import SafeAreaContainer from "../../core/wrappers/SafeAreaContainer";
import LoadingButton from "../../core/wrappers/LoadingButton";
import LottieViewHeader from "./components/LottieViewHeader";

const WelcomeScreen = ({ navigation }) => {
    const styles = useStyles();
    return (
        <SafeAreaContainer>
            <LottieViewHeader />
            <View style={styles.childContainer}>
                <Text h2>Welcome!</Text>
                <Text style={styles.subTitle}>Consolidate leave applications for streamlined tracking</Text>
                <LoadingButton name="Get Started" onPress={() => { navigation.navigate("StartupScreen") }}/>
            </View>
        </SafeAreaContainer>
    )
}

const useStyles = makeStyles((theme) => ({
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

export default WelcomeScreen;