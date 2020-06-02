import React from 'react';
import { Button } from 'react-native-paper';
import { View,Text,StatusBar } from 'react-native';

const HomeScreen=()=> {
  return (
  
    <View >
	<StatusBar backgroundColor="blue"  />
	
	<Text style={{marginTop:10,fontSize:16,color:"blue",textAlign:"center"}}>
	
	Hello Subhadeep ! Welcome To Your Profile 
	
	</Text>
	</View>
	
	
	
  );
}


export default HomeScreen;
