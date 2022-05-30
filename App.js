import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';
import {AppStyles} from "./styles/AppStyles";
import {TextInput} from "react-native-web";


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

                <text>Середня загрузка 30т</text>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}


