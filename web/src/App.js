import './App.css'
import React from 'react';
import ironMan from './Components/Images/ironMan.jpg';
import thor from './Components/Images/thor.jpg';
import cap from './Components/Images/cap.jpg';
import TopBar from "./Components/TopBar";
import TripList from "./Components/TripList";
import Stats from "./Components/Stats";

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
