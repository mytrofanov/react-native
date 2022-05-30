import React from 'react'
import {StatusBar} from 'expo-status-bar';
import {Text, View, TextInput} from 'react-native';
import {AppStyles} from "./styles/AppStyles";


export default function App() {
    return (
        <View style={AppStyles.container}>
            <View style={AppStyles.currentDate}>
                <Text>30.05.2022</Text>
            </View>
            <View style={AppStyles.text}>
                <Text>Перевір Міхалича!</Text>

                <TextInput
                    style={AppStyles.textInputStyles}
                    placeholder={'Дата:'}
                    keyboardType='numeric'
                />
                <TextInput
                    style={AppStyles.textInputStyles}
                    placeholder={'Авто №:'}
                    keyboardType='numeric'
                />
                <TextInput
                    style={AppStyles.textInputStyles}
                    placeholder={'ЭКГ №:'}
                    keyboardType='numeric'
                />
                <TextInput
                    style={AppStyles.textInputStyles}
                    placeholder={'Загрузка в т'}
                    keyboardType='numeric'
                />
                <TextInput
                    style={AppStyles.textInputStyles}
                    placeholder={'Вигрузка в т'}
                    keyboardType='numeric'
                />
                <button>ДАЛІ</button>

                <Text>Середня загрузка 30т</Text>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}


