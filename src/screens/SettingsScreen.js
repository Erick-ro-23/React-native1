import React from 'react'
import { View, SafeAreaView, Text, Button, StatusBar } from 'react-native';

export default function SettingsScreen(props) {
    const { navigation } = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    };

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Button onPress={() => goToPage("Home")} title="Ir a HOME" />
        </SafeAreaView>
    );
}