import { Text, makeStyles } from "@rneui/themed";
import React, { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, View } from "react-native";
import SafeAreaContainer from "../../core/wrappers/SafeAreaContainer";
import LoadingButton from "../../core/wrappers/LoadingButton";
import LottieViewHeader from "./components/LottieViewHeader";
import { Field, Formik } from "formik";
import ValidationSchema from "../../core/validationSchema/ValidationSchema";
import TextInputElement from "../../core/formElements/TextInputElement";
import { savePersonalInfo } from "../../core/localDatabase/SqlQuery";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../core/redux/slices/userSlice";

const startUpScreenValidation = ValidationSchema([
    { fieldName: "full_name", validationType: "required" },
]);

const StartupScreen = ({ navigation }) => {
    const styles = useStyles();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const handleStartUpFields = async (value) => {
        setLoading(true);
        let params = { ...value };
        params.carray_forward_leave = params.carray_forward_leave || 0;
        
        savePersonalInfo(params).then((res) => {
            Alert.alert(
                'Onboard Success!',
                'Congratulations on successfully completing your onboarding journey.',
                [{
                    text: 'Proceed',
                    onPress: () => {
                        let timer = setTimeout(() => {
                            setLoading(false);
                            dispatch(setUserDetails(res));
                            clearTimeout(timer);
                        }, 500);
                    }
                }]
            );
        }).catch(()=> {
            setLoading(false);
        })
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaContainer>
                    <ScrollView style={{ flex: 1 }}>
                        <LottieViewHeader />
                        <Formik
                            initialValues={{ full_name: "" }}
                            onSubmit={handleStartUpFields}
                            validationSchema={startUpScreenValidation}
                        >
                            {({ handleSubmit, values, errors }) => (
                                <View style={styles.formContainer}>
                                    <View>
                                        <Field
                                            component={TextInputElement}
                                            title="Enter Full Name"
                                            name="full_name"
                                            inputContainerStyle={styles.textInput}
                                            autoCapitalize="none"
                                            returnKeyType="done"
                                            autoCorrect={false}
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
                    </ScrollView>
                </SafeAreaContainer>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}


const useStyles = makeStyles((theme) => ({
    container: {
        flex: 1
    },
    formContainer: {
        paddingHorizontal: 20,
        paddingTop: 50,
        flex: 1,
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