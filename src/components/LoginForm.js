import React from "react";
import { TextInput, Button, Text, View } from "react-native";

export default function LoginFrom() {
    return (
        <View>
            <TextInput placeholder="Email"></TextInput>
            <TextInput placeholder="Contraseña"></TextInput>
            <Button title="Enviar" onPress={() => console.log("Enviado")} />
        </View>
    );
}