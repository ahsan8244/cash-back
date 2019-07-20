import './App.css'
import React from 'react';
import TopBar from "./Components/TopBar";
import TripList from "./Components/TripList";
import Stats from "./Components/Stats";
import receipt from './ocr/images/receipt.png';
import { Tesseract } from 'tesseract.ts';

class App extends React.Component{
  state = {
    collapsed: false,
    result: "Loading..."
  };
  render(){
  Tesseract
      .recognize(receipt)
      .then((res: any) => {
          this.setState({result : res["text"]});
      })
      .catch(console.error);
    return (
        <div>
            <TopBar/>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                <Stats/>
                <div style={{border : '0.2px solid black', marginTop : '40px'}}>
                </div>
                <TripList message={this.state.result}/>
            </div>
        </div>

    );
  }
}

export default App;
