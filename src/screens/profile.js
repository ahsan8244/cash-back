import React from 'react'
import { StyleSheet, Text, View, Image, Platform, StatusBar, FlatList, Modal, TouchableHighlight, Alert } from 'react-native'
import ReceiptCard from '../components/receipt-card'
import { db } from '../../dbconfig'

class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      receipts: {},
      imageUrl: require('../../assets/splash.png'),
      modalVisible: false
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
    
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 22, flex: 1 }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 24 }}>{`Merchant: ${this.state.receipts.merchant}`}</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
            <FlatList
                data = {this.extractItems()}
                renderItem={
                    ({item}) => 
                    <Text>{`${item.name}: ${item.price}`}</Text>
                }
            />
          </View>
        </Modal>

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
                ({item}) => <ReceiptCard 
                imageUri={this.state.imageUrl}
                title={item.merchant}
                date='29/06/2019'
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