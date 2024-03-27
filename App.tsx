import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import { StyleSheet, Text, View,Image,TouchableOpacity, TextInput,} from 'react-native';

import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Home from './Views/Home';
import Admin from './Views/Admin';

export default function App() {

  const Stack = createStackNavigator();
  return (
   

    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: true }}>
       
      

      

       <Stack.Screen name="Login" component={Login }/>
       <Stack.Screen name="SignUp" component={SignUp }/>
       <Stack.Screen name="Home" component={Home }/>
       <Stack.Screen name="Admin" component={Admin }/>

   </Stack.Navigator>
 </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
  
  
});
