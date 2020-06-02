import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View ,StatusBar,TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native';

const SignupScreen=(props)=> {
  return (
  
    <View >
	<KeyboardAvoidingView behavior="position">
	<StatusBar backgroundColor="blue"  />
	<Text style={{fontSize:28,marginLeft:18,color:"blue",marginTop:10}}>Signup Here</Text>
	<View
	
	style={{
		borderBottomColor:"blue",
		borderBottomWidth:4,
		borderRadius:10,
		marginLeft:20,
		marginRight:120,
		marginTop:4
	}}
	
	/>
	  
      <Text style={{fontSize:20,marginLeft:18,marginTop:20}}>Create New Account</Text>
    
	 <TextInput
	           placeholder = "   Name"
			   
               placeholderTextColor = "#3b3b3b" 
			   style={{ height: 40, borderBottomColor: 'blue', borderWidth: 2,marginTop:12,borderRadius:10,marginLeft:20,marginRight:20 }}
    />
	<TextInput
	           placeholder = "   Email"
               placeholderTextColor = "#3b3b3b" 
			   style={{ height: 40, borderBottomColor: 'blue', borderWidth: 2,marginTop:8,borderRadius:10,marginLeft:20,marginRight:20 }}
    />
	<TextInput
	           placeholder = "   Password"
			   
               placeholderTextColor = "#3b3b3b" 
			   style={{ height: 40, borderBottomColor: 'blue', borderWidth: 2,marginTop:8,borderRadius:10,marginLeft:20,marginRight:20 }}
    />
	<Button  mode="outlined" style={{marginTop:10,color:"blue",marginLeft:20,marginRight:20}}>
    Sign Up
  </Button>
  <TouchableOpacity>
    <Text style={{fontSize:18,marginLeft:22,marginTop:20}}
	onPress={()=>{props.navigation.navigate("login")}}
	>
	already have a account ?
	</Text>
    
  </TouchableOpacity>
	</KeyboardAvoidingView>
	</View>
	
	
	
  );
}

export default SignupScreen;
