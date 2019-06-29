import React from 'react'
import { Text, View, Image, TouchableHighlight } from 'react-native'

class ReceiptCard extends React.Component {
    render(){
        return(
            <TouchableHighlight onPress={this.props.handleClick} underlayColor='grey'>
                <View style={{ height: 190, flex: 1, borderWidth: 0.5, borderColor: '#dddddd', marginHorizontal: 20, marginTop: 20 }}>
                    <View style={{ flex: 3 }}>
                        <Image source={this.props.imageUri}
                        style={{ resizeMode: 'cover', flex: 1, width: null, height: null }}/>
                    </View>
                    <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 12 }}>
                        <Text style={{ fontSize: 16 }}>{this.props.title}</Text>
                        <Text style={{ color: 'grey' }}>{this.props.date}</Text> 
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

export default ReceiptCard;