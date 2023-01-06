import React from "react";
import {TextInput, Text, View} from 'react-native';

import styles from './Input.style';

function Input ({label, placeholder, onChanceText}) {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input_container}>
            <TextInput placeholder={placeholder} onChanceText={onChanceText} />
            </View>
        </View>
    );
};

export default Input;