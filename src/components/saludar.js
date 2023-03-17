import React from 'react';
import { Text } from "react-native";
import propTypes from "prop-types";

export default function Saludar(props) {
    // const { firtname = "Erick", lastname = "Riva" } = props;
    const { firtname, lastname } = props;
    console.log(props);
    return (
        <Text>
            Hola {firtname} {lastname} todo bien !
        </Text>
    )
}

Saludar.defaultProps = {
    firtname: "Ercik",
    lastname: "Riva"
}

Saludar.propTypes = {
    firtname: propTypes.string.isRequired,
    lastname: propTypes.string,
}