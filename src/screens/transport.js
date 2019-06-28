import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


class Transport extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Transport</Text> 
      </View>
    )
  }
}
export default Transport


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})