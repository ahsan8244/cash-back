import React from 'react'
import { Platform, StatusBar, Image } from 'react-native'
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

class Recents extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cards: [
                {
                    text: 'McDonalds',
                    location: 'Mid Level, Hong Kong',
                    image: require('../../assets/mcd.jpg'),
                    dateAdded: '27/06/2019'
                },
                {
                    text: 'Starbucks',
                    location: 'HKU, Hong Kong',
                    image: require('../../assets/starbucks.jpg'),
                    dateAdded: '25/06/2019'
                },
                {
                    text: 'Pacific Coffee',
                    location: 'Kennedy Town, Hong Kong',
                    image: require('../../assets/pacific.jpg'),
                    dateAdded: '22/06/2019'
                },

            ]
        }
    }

    render(){
        return(
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }}>
            <Container style={{ margin: 18 }}>
                <View>
                <DeckSwiper
                    dataSource={this.state.cards}
                    renderItem={item =>
                    <Card style={{ elevation: 3 }}>
                        <CardItem>
                        <Left>
                            <Icon name="locate" style={{ color: 'blue' }}></Icon>
                            <Body>
                            <Text>{item.text}</Text>
                            <Text note>{item.location}</Text>
                            </Body>
                        </Left>
                        </CardItem>
                        <CardItem cardBody>
                        <Image style={{ height: 400, flex: 1, resizeMode: 'cover' }} source={item.image} />
                        </CardItem>
                        <CardItem>
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <Icon name="checkmark-circle-outline" style={{ color: 'green' }} />
                            <Text style={{ marginBottom: 4, fontSize: 12, color: 'grey' }}>{`Date added: ${item.dateAdded}`}</Text>
                        </View>
                        </CardItem>
                    </Card>
                    }
                />
                </View>
            </Container>
            </View>
        )
    }
}

export default Recents;