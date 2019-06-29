import React from 'react'
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'
import { Icon } from 'native-base'
//import screens
//import Explore from './src/screens/explore'
import CameraApp from './src/screens/camera'
import Profile from './src/screens/profile'

import Food from './src/screens/food'
import Hotels from './src/screens/hotels'
import Transport from './src/screens/transport'
import Recents from './src/screens/recents'


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
  Recents:{
    screen: Recents,
    navigationOptions:{
      //tabBarLabel: 'Recents',
      tabBarIcon: 
        <Icon name = 'time' size={24} />
    }
  },
  Scan:{
    screen: CameraApp,
    navigationOptions:{
      //tabBarLabel: 'Scan',
      tabBarIcon: 
        <Icon name = 'expand' size={24} />
    }
  },
  Trips:{
    screen: Profile,
    navigationOptions:{
      //tabBarLabel: 'Trips',
      tabBarIcon: 
        <Icon name = 'airplane' size={24} />
    }
  }
},{
  tabBarOptions:{
    showIcon: true,
    showLabel: true,
    activeTintColor:'green',
    inactiveTintColor:'grey',
    style:{
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      elevation: 5
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
