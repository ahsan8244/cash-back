import './App.css'
import React from 'react';
import TopBar from "./Components/TopBar";
import TripList from "./Components/TripList";
import Stats from "./Components/Stats";
import receipt from './ocr/images/receipt.png';
import { Tesseract } from 'tesseract.ts';

Tesseract
    .recognize(receipt)
    .progress(console.log)
    .then((res: any) => {
        console.log(res["text"],res["confidence"]);
    })
    .catch(console.error);

class App extends React.Component{
  state = {
    collapsed: false,
  };

  render(){
    return (
        <div>
            <TopBar/>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                <Stats/>
                <div style={{border : '0.2px solid black', marginTop : '40px'}}>
                </div>
                <TripList/>
            </div>
        </div>

    );
  }
}

export default App;
