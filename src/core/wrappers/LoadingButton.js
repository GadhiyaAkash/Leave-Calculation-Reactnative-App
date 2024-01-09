import { Button } from "@rneui/themed";
import React from "react";

export default function LoadingButton(props) {
    return <Button
        {...props}
        buttonStyle={{
            minHeight: 42
        }}
        containerStyle={{
            minWidth: 80,
        }}
    >
        {props.name}
    </Button>
}