import React from 'react'
import { StyleSheet, Text, View, Image, Platform, StatusBar, FlatList, Modal, TouchableHighlight, Alert } from 'react-native'
import ReceiptCard from '../components/receipt-card'
import { db } from '../../dbconfig'
import { Icon } from 'native-base'
 
class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      receipts: {},
      imageUrl: require('../../assets/splash.png'),
      modalVisible: false,
      trips: [
        {
          place: 'Paris, France',
          date: 'Feb 2019',
          image: require('../../assets/paris.jpg')
        },
        {
          place: 'Mumbai, India',
          date: 'Dec 2018',
          image: require('../../assets/mumbai.jpg')
        },
        {
          place: 'London, England',
          date: 'June 2018',
          image: require('../../assets/london.jpg')
        }
      ]
    }
  }

  componentDidMount(){
    db.ref('/myreceipt').on('value', snapshot => {
      let data = snapshot.val()
      this.setState({ receipts: data })
    })
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  extractItems = () => {
    let items = []

    for (let key in this.state.receipts.items){
      let val = this.state.receipts.items[key]
      let item = {
        name: key,
        price: val
      }
      items.push(item)
    }
    return items
  }

  render(){
    return (
      <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }}>
        <View style={{ alignItems: 'center', marginBottom: 12 }}>
          <Image
            source={require('../../assets/pic.jpg')}
            style={{ width: 80, height: 80, borderRadius: 200 / 2, marginTop: 24 }}
          />
          <Text style={{ fontSize: 18, marginTop: 8 }}>Ahsan Syed</Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', backgroundColor: '#ebeef2', padding: 6, borderRadius: 50 }}>
              <Text style={{ marginTop: 5 }}>Trip Mode</Text>
              <Icon name="checkmark-circle-outline" style={{ color: 'green', marginLeft: 6 }}/>
            </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 14, marginBottom: 12 }}>
          <Text style={{ fontSize: 24 }}>Past Trips.</Text>
        </View>
        <FlatList
            style={{ marginBottom: 2 }}
            data={this.state.trips}
            renderItem={
                ({item}) => <ReceiptCard 
                imageUri={item.image}
                title={item.place}
                date={item.date}
                handleClick={() => {
                  this.setModalVisible(true)
                }}
                />
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