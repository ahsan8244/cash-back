import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


class Hotels extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Hotels</Text> 
      </View>
    )
  }
}
export default Hotels


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})