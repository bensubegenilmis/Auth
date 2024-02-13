import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

export default function AuthForm({ isLogin }) {

    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('')
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('')

    function updateInput(inputType, enteredValue) {
        switch (inputType) {
            case 'email':
                setEnteredEmail(enteredValue);
                break;

            case 'password':
                setEnteredPassword(enteredValue);
                break;

            case 'confirmEmail':
                setEnteredConfirmEmail(enteredValue);
                break;

            case 'confirmPassword':
                setEnteredConfirmPassword(enteredValue);
                break;
        }
    }

    return (
        <View>
            <Input
                label='Email'
                keyboardType='email-address'
                onUpdateValue={updateInput.bind(this, 'email')}
                value={enteredEmail}

            />
            {!isLogin && (
                <Input
                    label='Emaili Doğrula'
                    keyboardType='email-address'
                    onUpdateValue={updateInput.bind(this, 'confirmEmail')}
                    value={enteredConfirmEmail}

                />

            )}

            <Input
                label='Şifre'
                secure
                onUpdateValue={updateInput.bind(this, 'password')}
                value={enteredPassword}

            />
            {!isLogin && (
                <Input
                    label='Şifreyi Doğrula'
                    secure
                    onUpdateValue={updateInput.bind(this, 'confirmPassword')}
                    value={enteredConfirmPassword}

                />

            )}


            <View style={styles.buttons}>
                <Button>
                    {isLogin ? 'Giriş Yap' : 'Kaydol'}
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttons: {
        marginTop: 10,
    },
});