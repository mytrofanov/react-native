import {StyleSheet} from "react-native";

export const AppStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
    },
    currentDate: {
        flex: 1,
        marginTop:'5%',
        backgroundColor: 'orange',
        color: 'white'
    },
    text: {
        flex: 2,
        flexDirection: 'column',
        color: 'white'
    },
    textInputStyles: {
        borderColor: 'white',
        textAlign:'center',
        marginBottom: '2%',
        borderStyle:'solid'
    },



});
