import React from "react";
import { Input, Text, useTheme } from "@rneui/themed";

/**
 * This component renders a TextInput component.
 *
 * @param {Object} props - The props object containing the field, form, regex, style, and disabled properties.
 * @return {JSX.Element} - The rendered Input component.
 */
function TextInputElement(props) {
    const {
        field: { name, onBlur, onChange, value },
        form: { errors, touched, setFieldTouched },
        regex,
        style,
        disabled,
        ...inputProps
    } = props;

    const hasError = errors[name] && touched[name];

    const inputStyle = [
        {
            borderRadius: 4,
            color: "#000",
            fontSize: 13,
        },
        style,
    ];

    return (
        <>
            {
                props.title && <Text style={{ marginBottom: 5, fontWeight: "bold" }}>{props.title}</Text>
            }
            <Input
                value={value}
                onChangeText={(text) => {
                    let newText = text.replace(regex, "");
                    onChange(name)(newText);
                }}
                onBlur={() => {
                    setFieldTouched(name);
                    onBlur(name);
                }}
                errorStyle={{
                    color: "#FF0000",
                    fontWeight: "normal",
                }}
                errorMessage={hasError && errors[name]}
                style={inputStyle}
                {...inputProps}
                disabled={disabled}
                // cursorColor={theme.colors.primary}
            />
        </>
    );
}

TextInputElement.defaultProps = {
    inputMode: "text",
    regex: new RegExp(""),
    placeholderTextColor: '#24263F',
    autoCapitalize: "none"
};

export default TextInputElement;