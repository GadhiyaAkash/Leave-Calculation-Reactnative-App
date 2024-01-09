import { Text, makeStyles } from "@rneui/themed";
import React, { useState } from "react";
import { View } from "react-native";
import SafeAreaContainer from "../../core/wrappers/SafeAreaContainer";
import LoadingButton from "../../core/wrappers/LoadingButton";
import LottieViewHeader from "./components/LottieViewHeader";
import { Field, Formik } from "formik";
import ValidationSchema from "../../core/validationSchema/ValidationSchema";
import TextInputElement from "../../core/formElements/TextInputElement";

const startUpScreenValidation = ValidationSchema([
    { fieldName: "name", validationType: "required" },
]);

const StartupScreen = ({ navigation }) => {
    const styles = useStyles();
    const [loading, setLoading] = useState(false);

    const handleStartUpFields = async (value) => {
        console.log("values::", value);

        let timer = setTimeout(() => {
            setLoading(false);
            clearTimeout(timer);
        }, 500);
    }
    return (
        <SafeAreaContainer>
            <LottieViewHeader />
            <View style={styles.childContainer}>
                <Formik
                    initialValues={{ name: "" }}
                    onSubmit={handleStartUpFields}
                    validationSchema={startUpScreenValidation}
                >
                    {({ handleSubmit, values }) => (
                        <View style={styles.formContainer}>
                            <View>
                                <Field
                                    component={TextInputElement}
                                    title="Enter Full Name"
                                    name="name"
                                    inputContainerStyle={styles.textInput}
                                />
                                <Field
                                    component={TextInputElement}
                                    title="Enter Carray Forward Leaves"
                                    inputMode="numeric"
                                    name="carray_forward_leave"
                                    inputContainerStyle={styles.textInput}
                                />
                            </View>
                            <View style={styles.buttonsContainer}>
                                <LoadingButton
                                    type="outline"
                                    onPress={() => { navigation.navigate("WelcomeScreen") }}
                                    name="Back"
                                />
                                <LoadingButton
                                    onPress={handleSubmit}
                                    name="Start"
                                    loading={loading}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
        </SafeAreaContainer>
    )
}

const useStyles = makeStyles((theme) => ({
    childContainer: {
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 30,
        flex: 1
    },
    formContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textInput: {
        height: 48,
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 4,
        paddingLeft: 8,
        marginHorizontal: -10,
        borderColor: "transparent",
    }
}));

export default StartupScreen;