import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


class Food extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Food</Text> 
      </View>
    )
  }
}
export default Food


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})