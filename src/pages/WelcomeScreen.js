import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

import Button from '../components/button/Button'

function Welcome({navigation}) {

    function goToMemberSign(){
        navigation.navigate('MemberSignScreen');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Kebap Fitness Salonu</Text>
            <Button text="üye kaydı oluştur" onPress={goToMemberSign} />
        </SafeAreaView>
    );
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
    },
});
