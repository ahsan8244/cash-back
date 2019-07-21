import React,{Component} from "react";
import { List, Typography } from 'antd';
import Element from './Element.js';
import ironMan from './Images/ironMan.jpg';
import { Tabs } from 'antd';
import { Empty } from 'antd';
import { db } from '../dbconfig';
import { Tesseract } from 'tesseract.ts';
import receipt from '../ocr/images/receipt.png';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

class TripList extends React.Component{
    constructor(){
        super();
        this.state = {
            add:
            {
                Title : "haha",
                Location : "FT Life Tower, Kowloon Bay Hong Kong",
                Expense : "HKD 52",
                Date : '30 June 2019',
                Details : [
                    ['1 GCB', 'HKD 30'],
                    ['1 Black Coffee','HKD 10'],
                    ['1 Hash Brown' , 'HKD 6'],
                    ['1 UpSize package','HKD 6']
                ],
                id : '3840239123',
                isReimbursed : false
            },
            isAdded : false
        }
    }

    componentDidMount(){
        db.ref().child('receipts').on('child_added', snapshot => {
            this.setState({ isAdded: true })
        })
    }

    render(){
        if(this.state.isAdded){
            let date = ""
            Tesseract.recognize(receipt)
            .then((res: any) => {
                let result = res.text.split('\n');
                for(let i = 0 ; i<result.length ; ++i){
                    console.log(result[i]);
                    if(result[i].substring(0,5)=="Date:")
                        date = result[i].substring(5,);
                }
                this.setState({
                    add : {
                        Title : result[0],
                        Location : result[1],
                        Expense : result[2],
                        Date : date,
                        Details : [
                            ['1 GCB', 'HKD 30'],
                            ['1 Black Coffee','HKD 10'],
                            ['1 Hash Brown' , 'HKD 6'],
                            ['1 UpSize package','HKD 6']
                        ],
                        id : '3840239123',
                        isReimbursed : false
                    },
                    isAdded : false
                })
            })
            .catch(console.error);
        }
        return (
            <div style={{width:"500px"}}>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Previous Trips" key="1">
                        <Empty/>
                    </TabPane>
                    <TabPane tab="Current Trip" key="2">
                        <div style={{borderLeft : '0.1px solid white',paddingLeft : '40px'}}>
                            <h3 className="Expense" style={{ margin: '16px 0',fontWeight : 'bold' }}>Expense</h3>
                            <div className = "expenseList" style = {{height:'auto',borderRadius:'15px',display:'grid',backgroundColor : '#8BDCE8'}}>
                                    <Element key={this.state.add.id} item={this.state.add}/>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Upcoming Trips" key="3">
                        <Empty/>
                    </TabPane>
                </Tabs>
            </div>

        );
    }
}
export default TripList;

/*
{
    Title : 'Flight to Japan',
    Expense : 'HKD 4500',
    Date : '29 June 2019',
    Details : [
        ['1 Business Class Ticket','HKD 4000'],
        ['1 Insurance Package','HKD 220'],
        ['1 Meal in Airport','HKD 80'],
        ['Taxi to destination','HKD 200']
    ],
    id : '830184019'
},
{
    Title : '5 days 4 night hotel in Osaka',
    Expense : 'HKD 4500',
    Date : '29 June 2019',
    Details : [
        ['2 Salmon Mentai','HKD 542'],
        ['1 Tuna Roll','HKD 220'],
        ['2 Special Japanese Sake','HKD 900'],
        ['2 Oriental Mango Dessert','HKD 150']
    ],
    id : '2138503453'
}
*/
