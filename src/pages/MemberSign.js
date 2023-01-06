import React, {useState} from "react";
import { Alert, SafeAreaView } from 'react-native';

import Input from "../components/Input";
import Button from "../components/button";

function MemberSign({navigation}) {
    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userMail, setUserMail] = useState(null);
    const [userHometown, setUserHometown] = useState(null);

    function handleSubmit() {
        if (!userName || !userSurname || !userAge || !userMail || !userHometown){
            Alert.alert('Kebap Fitness Salonu', 'Bilgiler Boş Bırakılamaz');
        }
        const user = {
            userName,
            userSurname,
            userAge,
            userMail,
            userHometown,
        };
        navigation.navigate('MemberResaultScreen', {user})
    }
    return(
        <SafeAreaView>
            <Input 
                label="Üye Adı" 
                placeholder="Üyenin ismini giriniz..." 
                onChanceText={setUserName} 
            />
            <Input 
                label="Üye Soyadı" 
                placeholder="Üyenin soyismini giriniz..." 
                onChanceText={setUserSurname} 
            />
            <Input 
                label="Üye Yaşı"   
                placeholder="Üyenin yaşını giriniz..." 
                onChanceText={setUserAge}
            />
            <Input 
                label="Üye Eposta" 
                placeholder="Üyenin Eposta giriniz..." 
                onChanceText={setUserMail}
            />
            <Input 
                label="Üye Memleketi" 
                placeholder="Üyenin memlekitini giriniz..." 
                onChanceText={setUserHometown}
            />

            <Button text="Kaydı Tamamla" onPress={handleSubmit} />
        </SafeAreaView>
    );
}

export default MemberSign;