import React from 'react'
import { StyleSheet, Text, View, Image, Platform, StatusBar, FlatList } from 'react-native'
import MerchantCard from '../components/merchant-card'


class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
          data: [
              {
                  imageUrl: require('../../assets/splash.png'),
                  title: 'McDonalds'
              },
              {
                  imageUrl: require('../../assets/splash.png'),
                  title: 'Cafe de Coral'
              },
              {
                  imageUrl: require('../../assets/splash.png'),
                  title: 'Kai Kee'
              },
          ]
      }
  }

  render(){
    return (
      <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }}>
        <View style={{ alignItems: 'center', marginBottom: 12 }}>
          <Image
            source={require('../../assets/pic.jpg')}
            style={{ width: 128, height: 128, borderRadius: 200 / 2, marginTop: 24 }}
          />
          <Text style={{ fontSize: 24, marginTop: 14 }}>Ahsan Syed</Text>
        </View>
        <FlatList
            data={this.state.data}
            renderItem={
                ({item}) => <MerchantCard 
                imageUri={item.imageUrl}
                title={item.title}/>
            }
        />
      </View>
    )
  }
}
export default Profile


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})