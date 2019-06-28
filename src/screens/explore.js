import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


class Explore extends React.Component {
  handleSignOut = () => {
    //sign user out when this function is called
    auth.signOut().then(() => this.props.navigation.navigate('Loading'))
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Explore</Text> 
      </View>
    )
  }
}
export default Explore


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})