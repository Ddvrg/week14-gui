import React from 'react'
import {View,Text} from 'react-native'

const App=()=>{
  return(
    <View style={{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'stretch',
      }}>
      <View style={{width:50,height:50,backgroundColor:'#9932cc'}}></View>
      <View style={{width:50,height:100,backgroundColor:'#ff8c00'}}></View>
      <View style={{width:50,height:150,backgroundColor:'#00bfff'}}></View>
    </View>
  )
}

export default App