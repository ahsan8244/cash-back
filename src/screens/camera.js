import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from "react-native";

import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions'
import{ withNavigationFocus } from 'react-navigation'

import { Container, Content, Header, Item, Icon, Input, Button } from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import RNTesseractOcr from 'react-native-tesseract-ocr';

class CameraComponent extends Component {

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        photo: {}
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' })
    }

    snap = async () => {
      if (this.camera) {
        let photo = await this.camera.takePictureAsync();
        console.log(photo)
        this.setState({ photo: photo })

        const tessOptions = {
          whitelist: null, 
          blacklist: '\'!"#$%&/()={}[]+*-_;<>'
        };

        RNTesseractOcr.recognize(photo.uri, LANG_ENGLISH, tessOptions)
        .then((result) => {
          console.log("OCR Result: ", result);
        })
        .catch((err) => {
          console.log("OCR Error: ", err);
        })
        .done();
      }
    };

    render() {
        const { isFocused } = this.props
        const { hasCameraPermission } = this.state

        if (hasCameraPermission === null) {
            return <View />
        }
        else if (hasCameraPermission === false) {
            return <Text> No access to camera</Text>
        }
        else {
            return (
                <View style={{ flex: 1 }}>
                    {isFocused && <Camera 
                      ref={ref => {
                        this.camera = ref;
                      }}
                      style={{ flex: 1, justifyContent: 'space-between' }} type={this.state.type} >

                        <Header searchBar rounded
                            style={{
                                position: 'absolute', backgroundColor: 'transparent',
                                left: 0, top: 0, right: 0, zIndex: 100, alignItems: 'center'
                            }}
                        >
                            <View style={{ flexDirection: 'row', flex: 4 }}>
                                <Icon name="logo-snapchat" style={{ color: 'white' }} />
                                <Item style={{ backgroundColor: 'transparent' }}>
                                    <Icon name="ios-search" style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}></Icon>

                                    <Input
                                        placeholder="Search"
                                        placeholderTextColor="white"
                                    />


                                </Item>
                            </View>

                            <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'space-around' }}>
                                <Icon name="ios-flash" style={{ color: 'white', fontWeight: 'bold' }} />
                                <Icon
                                    onPress={() => {
                                        this.setState({
                                            type: this.state.type === Camera.Constants.Type.back ?
                                                Camera.Constants.Type.front :
                                                Camera.Constants.Type.back
                                        })
                                    }}
                                    name="ios-reverse-camera" style={{ color: 'white', fontWeight: 'bold' }} />
                            </View>
                        </Header>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 10, marginBottom: 15, alignItems: 'flex-end' }}>
                            <View style={{ alignItems: 'center' }}>
                              <TouchableHighlight 
                                onPress={this.snap}
                                underlayColor='transparent'
                                >
                                <MaterialCommunityIcons name="circle-outline"
                                    style={{ color: 'white', fontSize: 100 }}
                                ></MaterialCommunityIcons>
                              </TouchableHighlight>
                                <Icon name="ios-images" style={{ color: 'white', fontSize: 36 }} />
                            </View>
                        </View>
                    </Camera>}
                </View>
            )
        }
    }
}
export default withNavigationFocus(CameraComponent);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});