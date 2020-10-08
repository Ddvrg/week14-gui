import React from 'react'
import {View,Text,Image} from 'react-native'

const App=()=>{
  return(
    <View>
      <Image 
      style={{width:'100%',height:150}}
      source={require('./images/Racoon.jpg')} 
      />
      <Image 
      style={{width:'100%',height:150}}
      source={{uri:'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'}}
      />
      <Image 
      style={{width:'100%',height:150}}
      source={{uri:'https://images.unsplash.com/photo-1587580125992-bb74bba7580d?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'}}
      />
    </View>
  )
}
export default App