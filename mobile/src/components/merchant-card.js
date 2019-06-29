import React from 'react'
import { Text, View, Image } from 'react-native'

class MerchantCard extends React.Component {
    render(){
        return(
            <View style={{ height: 180, flex: 1, borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 20, marginTop: 20 }}>
                <View style={{ flex: 3 }}>
                    <Image source={this.props.imageUri}
                    style={{ resizeMode: 'cover', flex: 1, width: null, height: null }}/>
                </View>
                <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 12 }}>
                    <Text>{this.props.title}</Text>
                </View>
            </View>
        )
    }
}

export default MerchantCard;