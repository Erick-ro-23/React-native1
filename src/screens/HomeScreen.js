import React from 'react'
import { View, SafeAreaView, Text, Button, StatusBar } from 'react-native';


export default function HomeScreen(props) {
    // console.log(props);

    const { navigation } = props;

    const goToSettings = () => {
        navigation.navigate("Settings");
    };

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Button onPress={goToSettings} title='Ir a Ajustes' />
        </SafeAreaView>
    );
}