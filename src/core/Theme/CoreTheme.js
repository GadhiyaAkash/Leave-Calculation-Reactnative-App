import { createTheme } from "@rneui/themed";

const fontFamiyVarRegular = "Nunito_400Regular";
const fontFamiyVarRegularBold = "Nunito_700Bold";
const semiBoldFont = "Nunito_600SemiBold";

const AppTheme = createTheme({
    lightColors: {
        primary: '#8b3dff'
    },
    text: {
        textRegular: fontFamiyVarRegular,
        textBold: fontFamiyVarRegularBold,
    },
    components: {
        Text: (props) => ({
            style: {
                fontFamily: props.bold
                  ? fontFamiyVarRegularBold
                  : props.semiBold
                    ? semiBoldFont
                    : fontFamiyVarRegular,
              },  
        }),
    },
    mode: 'light'
});

export {
    AppTheme
}