import { Button, Text } from "@rneui/themed"
import { Field, Formik } from "formik"
import React from "react"
import { StyleSheet, TextInput, View } from "react-native"
import ValidationSchema from "../../core/validationSchema/ValidationSchema";
import TextInputElement from "../../core/formElements/TextInputElement";

const leaveValidationSchema = ValidationSchema([
    { fieldName: "cl_taken", validationType: "required" },
    { fieldName: "pl_taken", validationType: "required" }

]);

/**
 * Create a form with list of below input elements
 * Create list of month dropdown. Default value is January
 * Create a number fields CL and PL with  default value is 0.
 * Create two button Cancel and Submit. Validation should be fire on submit button
 */
export default LeaveAddScreen = () => {

    const handleLogin = (value) => {
        console.log("values::", value);
    };

    return (
        <View style={styles.container}>
            <Text h4 style={styles.title}>Add New Leave</Text>
            <Formik
                initialValues={{ cl_taken: "", pl_taken: "" }}
                onSubmit={handleLogin}
                validationSchema={leaveValidationSchema}
            >
                {({ handleSubmit, values }) => (
                    <>
                        <Field
                            component={TextInputElement}
                            placeholder="Enter CL (Casual Leave)"
                            name="cl_taken"
                            autoCapitalize="none"
                            inputContainerStyle={styles.textInput}
                            placeholderTextColor={'#24263F'}
                        />

                        <Field
                            component={TextInputElement}
                            placeholder="Enter PL (Paid Leave)"
                            name="pl_taken"
                            autoCapitalize="none"
                            inputContainerStyle={styles.textInput}
                            placeholderTextColor={'#24263F'}
                        />

                        <View style={styles.buttonsContainer}>
                            <Button type="outline">Cancel</Button>
                            <Button onPress={handleSubmit}>Submit</Button>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        textAlign: "center",
        paddingVertical: 15
    },
    textInput: {
        height: 48,
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 4,
        paddingLeft: 8,
        marginHorizontal: -10,
        borderColor: "transparent",
    }
})