import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View ,StatusBar,TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native';

const LoginScreen=(props)=> {
  return (
  
    <View >
	<KeyboardAvoidingView behavior="position">
	<StatusBar backgroundColor="blue"  />
	<Text style={{fontSize:28,marginLeft:18,color:"blue",marginTop:10}}>Please Login</Text>
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
	  
      <Text style={{fontSize:20,marginLeft:18,marginTop:20}}>Login With Email</Text>
    
	
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
    LOG IN
  </Button>
  <TouchableOpacity>
    <Text onPress={()=>{props.navigation.navigate("signup")}}
	
	style={{fontSize:18,marginLeft:22,marginTop:20}}>don't have a account ?</Text>
    
  </TouchableOpacity>
	</KeyboardAvoidingView>
	</View>
	
	
	
  );
}

export default LoginScreen;
