import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import AuthContent from '../components/AuthContent';
import Loading from '../components/Loading';
import { AuthContext } from '../store/auth-context';
import { login } from '../util/auth';




export default function LoginScreen() {

  const [isAuthanticating, setIsAuthanticating] = useState(false);
  const authContext=useContext(AuthContext);


async function loginHandler({email, password}){
  setIsAuthanticating(true)
try {
  const token = await login(email,password);
  authContext.authenticate(token);
} catch (error) {
  Alert.alert('Giriş Yapılamadı!', 'Lütfen bilgilerinizi kontrol ediniz.');
}


  setIsAuthanticating(false)
  
 }

 if(isAuthanticating){
  return <Loading  message='Giriş yapılıyor...' />;
 }

  return (
    <AuthContent isLogin onAuthenticate={loginHandler} />
  );
}

const styles = StyleSheet.create({});