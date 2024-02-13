import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator();

function NormalStack() { 
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'lightsteelblue',
      },
      headerTintColor: 'white',
      contentStyle:{
        backgroundColor:'white', //arka plan rengi
      },
    }}
    >
        <Stack.Screen name="Login" component={LoginScreen}
        options={{
          headerTitle:'Kullanıcı Giriş',
        }}
        />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <NormalStack />

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
