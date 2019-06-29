import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import{ withNavigationFocus } from 'react-navigation'
import * as Permissions from 'expo-permissions'
import { Camera } from 'expo-camera'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { db } from '../../dbconfig'
import { Object } from 'core-js';


class CameraApp extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    barCodeScanning: false,
    receiptData: {}
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  toggleBarcodeScanning = () => this.setState({ barcodeScanning: !this.state.barcodeScanning });

  onBarCodeScanned = code => {
    if (code.data.includes('https://cash-back-9c091.firebaseio.com')) {
      
      db.ref('/receipt').on('value', snapshot => {
        let data = snapshot.val()
        let items = Object.values(data)
        this.setState({ barcodeScanning: !this.state.barcodeScanning, receiptData: data })
        db.ref('/myreceipt').set(data)
        this.props.navigation.navigate('Profile')
      })
    }
  };
  // renderBarcode = () => (
  //     <View style={style.options}>
  //         <TouchableOpacity onPress={this.toggleBarcodeScanning}>
  //             <Text style={{color: "white"}}> QRCode </Text>
  //         </TouchableOpacity>
  //     </View>
  // );
  render(){
    const { isFocused } = this.props
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
          <View style={{flex: 1}}>
            {isFocused && <Camera style={{flex: 1}} type={this.state.type}
                    barCodeScannerSettings={{
                        barCodeTypes: [
                            BarCodeScanner.Constants.BarCodeType.qr,
                            BarCodeScanner.Constants.BarCodeType.pdf417,
                        ],
                    }}
                    onBarCodeScanned={this.state.barcodeScanning ? this.onBarCodeScanned : undefined}
            >
              <View
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                  }}>
                <TouchableOpacity
                    style={{
                      flex: 0.1,
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      this.setState({
                        type:
                            this.state.type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back,
                      });
                    }}>
                  <Text style={{fontSize: 18, marginBottom: 10, color: 'white'}}> Flip </Text>
                </TouchableOpacity>
                  <TouchableOpacity
                      style={{
                      flex: 0.1,
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                       }}
                      onPress={this.toggleBarcodeScanning}>
                      <Text style={{color: "white", marginBottom:10}}> QRCode </Text>
                  </TouchableOpacity>
              </View>
            </Camera>}
              {/*{this.renderBarcode()}*/}
          </View>
      )
    }
  }
}
export default withNavigationFocus(CameraApp)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});