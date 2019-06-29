import React from 'react'
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'
//import screens
//import Explore from './src/screens/explore'
import CameraApp from './src/screens/camera'
import Profile from './src/screens/profile'

import Food from './src/screens/food'
import Hotels from './src/screens/hotels'
import Transport from './src/screens/transport'


class App {
  render(){
    return(
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    )
  }
}

//top bar nav for explore screen
const ExploreNav = createMaterialTopTabNavigator({
  Food:{
    screen: Food,
    navigationOptions:{
      tabBarLablel: 'FOOD'
    }
  },
  Hotels:{
    screen: Hotels,
    navigationOptions:{
      tabBarLablel: 'HOTELS'
    }
  },
  Transport:{
    screen: Transport,
    navigationOptions:{
      tabBarLablel: 'TRANSPORT'
    }
  }
},{
    tabBarOptions:{
    style:{
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  } 
})

//main nav with bottom tabs
const MainNav = createBottomTabNavigator({
  Explore:{
    screen: ExploreNav,
    navigationOptions:{
      tabBarLablel: 'EXPLORE'
    }
  },
  Camera:{
    screen: CameraApp,
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
