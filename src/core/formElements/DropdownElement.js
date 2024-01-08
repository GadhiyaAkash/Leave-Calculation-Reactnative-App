import { useField, useFormikContext } from "formik";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
const DropdownElement = (props) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const { setFieldValue } = useFormikContext();
    const { field, form } = props;

    const inputStyle = [
        {
            borderRadius: 4,
            color: "#000",
            fontSize: 13,
            height: 48,
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderColor: "transparent",
            marginBottom: 25,
        }
    ];

    return (<>
        <DropDownPicker
            {...field}
            {...props}
            open={open}
            setOpen={setOpen}
            value={field.value}
            items={props.options}
            setValue={(val) => {
                form.setFieldValue(field.name, val());
            }}
            style={inputStyle}
        />
    </>);
}

export default DropdownElement;
