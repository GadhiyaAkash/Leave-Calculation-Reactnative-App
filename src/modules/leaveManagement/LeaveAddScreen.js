import { Button, Text } from "@rneui/themed"
import { Field, Formik } from "formik"
import React, { useState } from "react"
import { StyleSheet, TextInput, View } from "react-native"
import ValidationSchema from "../../core/validationSchema/ValidationSchema";
import TextInputElement from "../../core/formElements/TextInputElement";
import DropdownElement from "../../core/formElements/DropdownElement";
import { addOrUpdateLeave, findLeaveHistoryById } from "../../core/localDatabase/SqlQuery";
import { Months } from "./constant";
import LoadingButton from "../../core/wrappers/LoadingButton";

const leaveValidationSchema = ValidationSchema([
    // { fieldName: "cl_taken", validationType: "required" },
    // { fieldName: "pl_taken", validationType: "required" }
]);

/**
 * Create a form with list of below input elements
 * Create list of month dropdown. Default value is January
 * Create a number fields CL and PL with  default value is 0.
 * Create two button Cancel and Submit. Validation should be fire on submit button
 */
export default LeaveAddScreen = ({ navigation }) => {

    const [monthOption, setMonthOption] = useState(Months);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (value) => {
        let params = {...value};
        setLoading(true);
        if (params.cl_taken || params.pl_taken) {
            params.cl_taken = params.cl_taken || 0;
            params.pl_taken = params.pl_taken || 0;

            let leaveID = getIdxFromMonth(params.month) + 1;
            let hasLeaveHistory = await findLeaveHistoryById(leaveID);
            if (hasLeaveHistory) {
                params.cl_taken = parseFloat(params.cl_taken) + parseFloat(hasLeaveHistory.cl_taken);
                params.pl_taken = parseFloat(params.pl_taken) + parseFloat(hasLeaveHistory.pl_taken);
            }
            await addOrUpdateLeave({
                id: leaveID,
                ...params,
            });
        }
        let timer = setTimeout(() => {
            moveToHistoryPage();
            setLoading(false);
            clearTimeout(timer);
        }, 500);
    };
    const moveToHistoryPage = () => {
        navigation.navigate("LeaveHistory");
    };

    const getIdxFromMonth = (month) => Months.findIndex((mm) => mm.value === month);

    return (
        <View style={styles.container}>
            <Text h4 style={styles.title}>
                Add New Leave
            </Text>
            <Formik
                initialValues={{ cl_taken: "", pl_taken: "", month: "January" }}
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
                            inputMode="numeric"
                            inputContainerStyle={styles.textInput}
                        />
                        <Field
                            component={TextInputElement}
                            placeholder="Enter PL (Paid Leave)"
                            name="pl_taken"
                            inputMode="numeric"
                            inputContainerStyle={styles.textInput}
                        />
                        <View style={styles.buttonsContainer}>
                            <LoadingButton
                                type="outline"
                                onPress={moveToHistoryPage}
                                name="Cancel"
                            />
                            <LoadingButton
                                onPress={handleSubmit}
                                name="Submit"
                                loading={loading}
                            />
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