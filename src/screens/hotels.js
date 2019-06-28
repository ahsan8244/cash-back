import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


class Hotels extends React.Component {
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
            <View style={{ flex: 1 }}>
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
export default Hotels


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})