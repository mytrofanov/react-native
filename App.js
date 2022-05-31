import React from 'react'
import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';
import {AppStyles} from "./styles/AppStyles";
import {Button} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {Stack, TextInput, Chip} from "@react-native-material/core";


export default function App() {
    return (
        <View style={AppStyles.container}>
            <View style={AppStyles.currentDate}>
                <Stack fill center spacing={8}>
                    <Button title="НОВА ЗМІНА"/>
                    <Text style={AppStyles.currentDateText}>30.05.2022</Text>
                    <Chip variant="outlined" label="Середня загрузка 30т"   color="primary" />
                </Stack>

            </View>
            <View style={AppStyles.text}>
                <Text>Перевір Міхалича!</Text>

                <TextInput
                    variant="outlined" label="Авто №:"
                    style={AppStyles.textInputStyles}
                    keyboardType='numeric'
                />
                <TextInput
                    variant="outlined" label="ЭКГ №:"
                    style={AppStyles.textInputStyles}
                    keyboardType='numeric'
                />
                <TextInput
                    variant="outlined" label="Вигрузка в т"
                    style={AppStyles.textInputStyles}
                    keyboardType='numeric'
                />
                <Button title="ДАЛІ" trailing={props => <Icon name="send" {...props} />}/>


            </View>
            <StatusBar style="auto"/>
        </View>
    );
}


