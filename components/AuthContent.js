import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState } from 'react';
import AuthForm from './AuthForm';
import ButtonWhite from './ButtonWhite';
import { useNavigation } from '@react-navigation/native'; 



export default function AuthContent({isLogin, onAuthenticate}) {

  const navigation = useNavigation()

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email:false,
    password:false,
    confirmEmail:false,
    confirmPassword:false,
  });

function sumbitHandler (credentials){
  console.log(credentials);
  let{confirmEmail, confirmPassword, email, password} = credentials;


  email=email.trim();
  password=password.trim();

  const emailIsValid = email.includes('@');
  const passwordIsValid = password.length >6 ;
  const emailsAreEqual = email === confirmEmail;
  const passwordAreEqual = password === confirmPassword;

  if(!emailIsValid || !passwordIsValid || (!isLogin && (!emailsAreEqual || !passwordAreEqual)))
  {
    Alert.alert('Uyarı!', 'Lütfen girdiğiniz değerleri kontrol ediniz!');
    setCredentialsInvalid({
      email:!emailIsValid,
      confirmEmail:!emailIsValid || !emailsAreEqual,
      password: !passwordIsValid,
      confirmPassword: !passwordIsValid || !passwordAreEqual,
    })
    
    return;
  }
  onAuthenticate({email, password})
}


function switchScreen(){

  if(isLogin){
    navigation.navigate('Signup')
  }
  else{
    navigation.navigate('Login')
  }

}


  return (
    <View style={styles.container}>
        <AuthForm credentialsInvalid={credentialsInvalid}  isLogin = {isLogin} onsubmit={sumbitHandler}/>
        <View>
            <ButtonWhite onPress={switchScreen}>
                {isLogin ? 'Yeni Kullanıcı Oluştur' : 'Giriş Yap'}
            </ButtonWhite>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'lightsteelblue',
    marginTop: 50,
    marginHorizontal: 30,
    padding:15,
    borderRadius:20,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
  },
});