import React from 'react';
import { Card, Icon, List, Button } from 'antd';


const { Meta } = Card;
const ButtonGroup = Button.Group;


class EmployeeInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            employeeIndex : 0
        };
    }


    buttonPrevious = () =>{
        if(this.state.employeeIndex === 0 )
            {return;}
        else {
            this.setState({employeeIndex : this.state.employeeIndex - 1})
        }
    }

    buttonNext = () =>{
        if(this.state.employeeIndex === (this.props.employeeData.length-1) )
            {return;}
        else {
            this.setState({employeeIndex : this.state.employeeIndex+1})
        }
    }

    render(){
        return (
            <Card
            style={{textAlign : 'center', width: 350, backgroundColor : '#72A9CB',borderRadius : '15px',border : 'none'}}
            cover={
              <img
                alt="example"
                src={this.props.employeeData[this.state.employeeIndex][0]}
                style={{width: 200, height : 200,borderRadius : '50%',margin: '5% 75px 2% 75px'}}
              />
            }

              >
              <ButtonGroup style={{marginTop : '10px', marginBottom : '20px'}}>
                <Button style ={{backgroundColor:'#72A9CB',border : 'none',boxShadow : 'none'}} type="primary" onClick={this.buttonPrevious}>
                  <Icon type="left" />
                </Button>
                <Button style ={{backgroundColor:'#72A9CB',border : 'none',boxShadow : 'none'}} type="primary" onClick={this.buttonNext}>
                  <Icon type="right" />
                </Button>
              </ButtonGroup>
                <List
                  className="List"
                  size="small"
                  dataSource={this.props.employeeData[this.state.employeeIndex].slice(1,5)}
                  renderItem={item => <List.Item>{item}</List.Item>}
                  style={{fontSize : '18px',color : '#E0FBFC'}}
                />
          </Card>
        )
    }
}

export default EmployeeInfo;
