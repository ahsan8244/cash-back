import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


class Transport extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: [
                {
                    imageUrl: require('../../assets/splash.png'),
                    title: 'Uber'
                },
                {
                    imageUrl: require('../../assets/splash.png'),
                    title: 'Lyft'
                },
                {
                    imageUrl: require('../../assets/splash.png'),
                    title: 'BetterThanUber'
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
export default Transport


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})