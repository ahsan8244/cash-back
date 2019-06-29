import React from 'react'
import { Platform, StatusBar, Image } from 'react-native'
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import { db, storage } from '../../dbconfig'

class Recents extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cards: [
                {
                    text: 'McDonalds',
                    location: 'Mid Level, Hong Kong',
                    image: require('../../assets/mcd.jpg'),
                    dateAdded: '27/06/2019',
                    isDynamic: false
                },
                {
                    text: 'Starbucks',
                    location: 'HKU, Hong Kong',
                    image: require('../../assets/starbucks.jpg'),
                    dateAdded: '25/06/2019',
                    isDynamic: false
                },
                {
                    text: 'Pacific Coffee',
                    location: 'Kennedy Town, Hong Kong',
                    image: require('../../assets/pacific.jpg'),
                    dateAdded: '22/06/2019',
                    isDynamic: false
                },

            ]
        }
    }

    componentDidMount(){
        db.ref().child('receipts').on('child_added', snapshot => {
            let url = snapshot.val().url
            cardArr = this.state.cards
            cardArr.unshift(
                {
                    text: 'WHub',
                    location: 'FTLife Tower, Kowloon Bay, Hong Kong',
                    image: url,
                    dateAdded: '30/06/2019',
                    isDynamic: true
                }
            )
            this.setState({ cards: cardArr })
        })
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
                            <Icon name="pin" style={{ color: 'red' }}></Icon>
                            <Body>
                            <Text>{item.text}</Text>
                            <Text note>{item.location}</Text>
                            </Body>
                        </Left>
                        </CardItem>
                        <CardItem cardBody>
                        <Image style={{ height: 400, flex: 1, resizeMode: 'cover' }} source={item.isDynamic ? { uri: item.image } : item.image} />
                        </CardItem>
                        <CardItem>
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            {!item.isDynamic ? <Icon name="checkmark-circle-outline" style={{ color: 'green' }} /> :
                            <Icon name="swap" style={{ color: 'grey' }} />}
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