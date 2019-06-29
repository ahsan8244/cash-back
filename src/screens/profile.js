import React from 'react'
import { StyleSheet, Text, View, Image, Platform, StatusBar, FlatList } from 'react-native'
import MerchantCard from '../components/merchant-card'
import { db } from '../../dbconfig'


class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      receipts: {},
      imageUrl: require('../../assets/splash.png')
    }
  }

  componentDidMount(){
    db.ref('/myreceipt').on('value', snapshot => {
      let data = snapshot.val()
      this.setState({ receipts: data })
    })
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
            data={[this.state.receipts]}
            renderItem={
                ({item}) => <MerchantCard 
                imageUri={this.state.imageUrl}
                title={item.merchant}/>
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