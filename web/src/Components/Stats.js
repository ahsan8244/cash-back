import React,{Component} from "react";
import './Stats.css'
import { Statistic, Card, Row, Col, Icon } from 'antd';
import Text from "antd/lib/typography/Text";

class Stats extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div style={{width:300, marginTop:20}}>
                <Text style={{marginTop:20, fontSize:16, fontWeight : 'bold'}}> User Statistics</Text>
                    <div className="container" style={container}>
                        <div className="a" style={{display : 'grid', gridTemplateRows : '50% 10% 40%',textAlign : 'center'}}>
                            <h1 style={{color : '#fff', fontSize : '48px', marginBottom : '0px'}}>14</h1>
                            <p style={{color : '#fff',marginTop : '0px',paddingTop : '0px'}}>trips this year</p>
                            <div className="details" style={{width : '80%', height : '100%',alignSelf : 'center', justifySelf : 'center', display : 'grid', gridTemplateColumns : 'repeat(3,1fr)',gridGap : '3px'}}>
                                <div className = "item">
                                    <h1>4</h1>
                                    <p>Countries</p>
                                </div>
                                <div className = "item">
                                    <h1>2</h1>
                                    <p>Continents</p>
                                </div>
                                <div className = "item">
                                    <h1>89</h1>
                                    <p>Transactions</p>
                                </div>

                            </div>
                        </div>
                        <div className="b">
                        </div>
                        <div className="c" >
                        </div>
                    </div>
            </div>
        );
    }
}



const container = {
    backgroundColor : '#8BDCE8',
    borderRadius : '15px',
    width : '100%',
    marginTop : '20px',
    height : 'auto',
    display : 'grid',
    gridTemplateRows : 'repeat(3,200px)'
}

export default Stats;
