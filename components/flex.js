import React from 'react'
import {View,Text} from 'react-native'

const App=()=>{
  return(
    <View style={{flex:1,margin:20}}>
      <View style={{flex:1,backgroundColor:'#8b008b'}}>
      <Text style={{color:'red'}}>Hello World</Text>
      </View>
      <View style={{flex:2,backgroundColor:'skyblue'}}></View>
      <View style={{flex:3,backgroundColor:'#228b22'}}></View>
    </View>
  )
}

export default App