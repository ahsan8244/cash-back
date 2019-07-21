import './App.css'
import React from 'react';
import TopBar from "./Components/TopBar";
import TripList from "./Components/TripList";
import Stats from "./Components/Stats";

class App extends React.Component{
  state = {
    collapsed: false,
    result: "Loading..."
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
