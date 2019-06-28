import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
//import screens
import Explore from './src/screens/explore'
import Camera from './src/screens/camera'
import Profile from './src/screens/profile'


class App {
  render(){
    return(
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    )
  }
}

//main nav with bottom tabs
const MainNav = createBottomTabNavigator({
  Explore:{
    screen: Explore,
    navigationOptions:{
      tabBarLablel: 'EXPLORE'
    }
  },
  Camera:{
    screen: Camera,
    navigationOptions:{
      tabBarLablel: 'CAMERA'
    }
  },
  Profile:{
    screen: Profile,
    navigationOptions:{
      tabBarLablel: 'PROFILE'
    }
  }
})

const Container = createAppContainer(MainNav)

export default Container

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
