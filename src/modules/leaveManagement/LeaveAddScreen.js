import { Button, Text } from "@rneui/themed"
import { Field, Formik } from "formik"
import React, { useState } from "react"
import { StyleSheet, TextInput, View } from "react-native"
import ValidationSchema from "../../core/validationSchema/ValidationSchema";
import TextInputElement from "../../core/formElements/TextInputElement";
import DropdownElement from "../../core/formElements/DropdownElement";
import { insertProcedures } from "../../core/localDatabase/SqlQuery";

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
export default LeaveAddScreen = ({ navigation }) => {

    const handleLogin = (value) => {
        console.log("values/-------------::", value);
        insertOfflineData(value);
    };
    const cancelLeaveAdd = () => {
        navigation.navigate("LeaveHistory");
    };

    const insertOfflineData = async (data) => {
        const res = await insertProcedures({
            id: data.month,
            ...data,
        });
        console.log("INTERSETED RES::", res);
        return res;
    };

    const [monthOption, setMonthOption] = useState([
        { label: "January", value: 1 },
        { label: "February", value: 2 },
        { label: "March", value: 3 },
        { label: "April", value: 4 },
        { label: "May", value: 5 },
        { label: "June", value: 6 },
        { label: "July", value: 7 },
        { label: "August", value: 8 },
        { label: "September", value: 9 },
        { label: "October", value: 10 },
        { label: "November", value: 11 },
        { label: "December", value: 12 }
    ]);

    return (
        <View style={styles.container}>
            <Text h4 style={styles.title}>
                Add New Leave
            </Text>
            <Formik
                initialValues={{ cl_taken: "1", pl_taken: "0", month: 1 }}
                onSubmit={handleLogin}
                validationSchema={leaveValidationSchema}
            >
                {({ handleSubmit, values }) => (
                    <>
                        <Field
                            component={DropdownElement}
                            name="month"
                            value={values.month}
                            options={monthOption}
                            inputContainerStyle={styles.textInput}
                        />
                        <Field
                            component={TextInputElement}
                            placeholder="Enter CL (Casual Leave)"
                            name="cl_taken"
                            inputContainerStyle={styles.textInput}
                        />
                        <Field
                            component={TextInputElement}
                            placeholder="Enter PL (Paid Leave)"
                            name="pl_taken"
                            inputContainerStyle={styles.textInput}
                        />
                        <View style={styles.buttonsContainer}>
                            <Button type="outline" onPress={cancelLeaveAdd}>Cancel</Button>
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
        paddingHorizontal: 15,
        flex: 1
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