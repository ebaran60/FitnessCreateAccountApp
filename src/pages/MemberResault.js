import React from "react";
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function MemberResault({route}) {
    const {user} = route.params;

    return(
        <SafeAreaView>
            <Text style= {styles.label} >Üye Adı : {user.userName}</Text>
            <Text style= {styles.label} >Üye Soyadı {user.userSurname}:</Text>
            <Text style= {styles.label} >Üye Yaşı : {user.setUserAge}</Text>
            <Text style= {styles.label} >Üye E-posta :{user.setUserMail}</Text>
            <Text style= {styles.label} >Üye Memleketi : {user.setUserHometown}</Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize:20,
        margin:5,
    }
})
export default MemberResault;