import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
//import sub screens for explore tab
import Food from './food'
import Hotels from './hotels'
import Transport from './transport'


class Explore extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Explore</Text> 
      </View>
    )
  }
}

const ExploreContainer = createAppContainer(ExploreNav)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})