import React from 'react';
import { List, Typography } from 'antd';
import Element from './Element.js';

let employeeIndex = 0;

class EmployeeExpense extends React.Component{
    render(){
        const {employeeData} = this.props;
        return(
            <div style={{borderLeft : '0.1px solid white',paddingLeft : '40px'}}>
               <h3 style={{ margin: '16px 0' }}>{employeeData[employeeIndex][1]}'s Expense</h3>
               <div className = "expenseList" style = {{height:'auto',borderRadius:'15px',display:'grid',backgroundColor : '#72A9CB'}}>
                    {employeeData[0][employeeData[0].length-1].map((element)=>(
                        <Element key={element.id} item={element}/>
                    ))}
               </div>
            </div>
        );

    }
}

/*
<List
  size="large"

  bordered

  renderItem={item => <List.Item>{item}</List.Item>}
/>
*/

export default EmployeeExpense;
