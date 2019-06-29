import React from 'react'
import EmployeeInfo from "../App";
import EmployeeExpense from "./EmployeeExpense";
import ironMan from "./Images/ironMan.jpg";
import cap from "./Images/cap.jpg";
import thor from "./Images/thor.jpg";

class Employee extends React.Component{
    state = {
        employeeData : [
            [
                ironMan,
                'Iron Man',
                '303571179413',
                'Software Engineer',
                'Currently on leave to Japan',
                [
                    {
                        Title : 'Eating at sushi restaurant with client',
                        Expense : 'HKD 4500',
                        Date : '29 June 2019',
                        Details : {
                            '2 Salmon Mentai' : 'JPY 1380.3',
                            '1 Tuna Roll' : 'JPY 670.5',
                            '2 Special Japanese Sake' : 'JPY 15702',
                            '2 Oriental Mango Dessert' : 'JPY 834.7'
                        },
                        id : '384023984'
                    },
                    {
                        Title : 'Flight to Japan',
                        Expense : 'HKD 4500',
                        Date : '29 June 2019',
                        Details : {
                            '2 Salmon Mentai' : 'JPY 1380.3',
                            '1 Tuna Roll' : 'JPY 670.5',
                            '2 Special Japanese Sake' : 'JPY 15702',
                            '2 Oriental Mango Dessert' : 'JPY 834.7'
                        },
                        id : '830184019'
                    },
                    {
                        Title : '5 days 4 night hotel in Osaka',
                        Expense : 'HKD 4500',
                        Date : '29 June 2019',
                        Details : {
                            '2 Salmon Mentai' : 'JPY 1380.3',
                            '1 Tuna Roll' : 'JPY 670.5',
                            '2 Special Japanese Sake' : 'JPY 15702',
                            '2 Oriental Mango Dessert' : 'JPY 834.7'
                        },
                        id : '2138503453'
                    }

                ]
            ],
            [
                cap,
                'Captain America',
                '303571172138',
                'UI Design',
                'Currently on leave to New York',
            ],
            [
                thor,
                'Thor',
                '303571174323',
                'Market Analyst',
                'Doesn\'t have any trip',
            ]
        ]
    };

    render(){
        return(
            <div>
                <EmployeeInfo employeeData={this.state.employeeData}/>
                <EmployeeExpense employeeData={this.state.employeeData}/>
            </div>
        )
    }
}

export default Employee