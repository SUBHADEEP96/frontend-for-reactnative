import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View ,StatusBar,TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';


App=()=> {
  return (
  
    <NavigationContainer>
	<Stack.Navigator>
        <Stack.Screen name="signup" component={SignupScreen} />
		<Stack.Screen name="login" component={LoginScreen} />
		
    
	</Stack.Navigator>
	
	</NavigationContainer>
	
	
	
  );
}



export default App;


