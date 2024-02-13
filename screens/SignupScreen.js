import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AuthContent from '../components/AuthContent';
import { createUser } from '../util/auth';



 async function signUpHandler({email, password}){
  await createUser(email,password);

 }

export default function SignupScreen() {
  return (
    <AuthContent onAuthenticate={signUpHandler}/>
  );
}

const styles = StyleSheet.create({});