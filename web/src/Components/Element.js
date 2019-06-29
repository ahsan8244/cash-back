import React,{Component} from 'react';
import { Button,Icon } from 'antd';
import './Element.css';
import { Collapse } from 'antd';

const { Panel } = Collapse;
function callback(key) {
    console.log(key);
}


class Element extends Component{

    constructor(props){
        super(props)
        this.state = {
            isExpanded : false,
            isClosed : true
        }
    }


    render(){
       return(
           <div>

               <Collapse defaultActiveKey={['1']} onChange={callback}>
                   <Panel header={this.props.item.Title} key={this.props.item.id}>
                       <div style={{paddingLeft : '5%',  display : 'grid',borderRadius : '10px', gridTemplateRows:'repeat(2,(100/9)%) auto (100/9)%',width : '100%',  backgroundColor :'#8BDCE8'}}>
                           <p style={pStyle}>Location : {this.props.item.Location}</p>
                           <p style={pStyle}>Date : {this.props.item.Date}</p>
                           <div style={{gridRow : '3/4', display : 'grid', gridTemplateRows : 'repeat(6,15%) 10%'}}>
                               <p style={pStyle}>Details : </p>
                               <div style={pStyle2}><p style={styleLeft}>{this.props.item.Details[0][0]} : </p><p style={styleRight}>{this.props.item.Details[0][1]}</p> </div>
                               <div style={pStyle2}><p style={styleLeft}>{this.props.item.Details[1][0]} : </p><p style={styleRight}>{this.props.item.Details[1][1]}</p></div>
                               <div style={pStyle2}><p style={styleLeft}>{this.props.item.Details[2][0]} : </p><p style={styleRight}>{this.props.item.Details[2][1]}</p></div>
                               <div style={pStyle2}><p style={styleLeftB}>{this.props.item.Details[3][0]} : </p><p style={styleRightB}>{this.props.item.Details[3][1]}</p></div>

                               <div style={pStyle2Special}><p style={styleLeft}>Grand Total : </p><p style={styleRight}>{this.props.item.Expense}</p></div>
                           </div>
                           <div className="Element" style={{display : 'grid',gridTemplateColumns : '80% 20%',gridRow : '4/5'}}>
                               <p style={pStyle}>ID : {this.props.item.id}</p>
                           </div>
                           <div className="Element">
                               <p style={pStyle}>Reimbursed : <Icon type={this.props.item.isReimbursed ? "check-circle" : "loading"} style={{color : 'green'}}/></p>
                           </div>
                       </div>
                   </Panel>
               </Collapse>
           </div>
       )
        // if(!isExpanded){
        //     return(
        //         <div className="Element" style={{display : 'grid',gridTemplateColumns : '80% 20%'}}>
        //             <p style={{ margin : '10px',fontWeight:'bold',fontSize : '20px'}}>{this.props.item.Title}{'    '}<Icon type="check-circle" style={{color : 'green'}}/></p>
        //             <Button className = "Expand" type="primary" onClick={this.Expanded}>
        //               <Icon type="down" />
        //             </Button>
        //         </div>
        //     );
        // }
        // else {
        //     return(
        //         <div className="Container" style={{display:'grid',gridTemplateRows:'10% 90%'}}>
        //             <p style={{ margin : '10px',fontWeight:'bold',fontSize : '20px'}}>
        //                 {this.props.item.Title}{'    '}
        //             <Icon type="check-circle" style={{color : 'green'}}/>
        //                 <Button className = "Close" type="primary" onClick={this.Closed}>
        //                     <Icon type="up" />
        //                 </Button>
        //             </p>
        //             <div style={{paddingLeft : '5%',  display : 'grid',borderRadius : '10px', gridTemplateRows:'repeat(2,(100/9)%) auto (100/9)%',width : '100%',  backgroundColor :'#8BDCE8'}}>
        //                 <p style={pStyle}>Total Expense : {this.props.item.Expense}</p>
        //                 <p style={pStyle}>Date : {this.props.item.Date}</p>
        //                 <div style={{gridRow : '3/4', display : 'grid', gridTemplateRows : 'repeat(6,15%) 10%'}}>
        //                     <p style={pStyle}>Details : </p>
        //                     <div style={pStyle2}><p style={styleLeft}>2 Salmon Mentai : </p><p style={styleRight}>{this.props.item.Details['2 Salmon Mentai']}</p> </div>
        //                     <div style={pStyle2}><p style={styleLeft}>1 Tuna Roll : </p><p style={styleRight}>{this.props.item.Details['1 Tuna Roll']}</p></div>
        //                     <div style={pStyle2}><p style={styleLeft}>2 Special Japanese Sake : </p><p style={styleRight}>{this.props.item.Details['2 Special Japanese Sake']}</p></div>
        //                     <div style={pStyle2}><p style={styleLeftB}>2 Oriental Mango Dessert : </p><p style={styleRightB}>{this.props.item.Details['2 Oriental Mango Dessert']}</p></div>
        //                     <div style={pStyle2Special}><p style={styleLeft}>Grand Total : </p><p style={styleRight}>HKD 1612</p></div>
        //
        //                 </div>
        //                 <div className="Element" style={{display : 'grid',gridTemplateColumns : '80% 20%',gridRow : '4/5'}}>
        //                     <p style={pStyle}>ID : {this.props.item.id}</p>
        //
        //                 </div>
        //             </div>
        //         </div>
        //     );
        // }
    }
}

const pStyle = {
    margin : '10px',
    color : '#000',
    fontSize : '16px',
    fontWeight : 'bold'
}

const pStyle2 = {
    margin : '10px',
    marginLeft : '60px',
    display : 'grid',
    gridTemplateColumns : '75% 25%',
    color : '#000',
    fontSize : '16px'
}

const pStyle2Special = {
    margin : '10px',
    marginLeft : '60px',
    display : 'grid',
    gridTemplateColumns : '75% 25%',
    marginTop : 0,
    color : '#000',
    fontSize : '16px'
}

const styleLeft = {
    alignSelf : 'start',
    fontSize : '16px'
}

const styleLeftB = {
    alignSelf : 'start',
    borderBottom : '1px solid #000',
    fontSize : '16px'
}


const styleRight = {
    alignSelf : 'end',
    fontSize : '16px'
}

const styleRightB = {
    alignSelf : 'end',
    borderBottom : '1px solid #000',
    fontSize : '16px'
}

export default Element;

/*
(<div className="Element" style={{display : 'grid',gridTemplateColumns : '80% 20%'}}>
            <p style={{ margin : '10px'}}>{this.props.item.Title}</p>
            <input type="submit" value="Expand" onClick={this.Expanded}/>
          </div>)
          */

/*
<div style={pStyle2}><p style={styleLeft}>2 Salmon Mentai : </p><p style={styleRight}>{this.props.item.Details['2 Salmon Mentai']}</p> </div>
<div style={pStyle2}><p style={styleLeft}>1 Tuna Roll : </p><p style={styleRight}>{this.props.item.Details['1 Tuna Roll']}</p></div>
<div style={pStyle2}><p style={styleLeft}>2 Special Japanese Sake : </p><p style={styleRight}>{this.props.item.Details['2 Special Japanese Sake']}</p></div>
<div style={pStyle2}><p style={styleLeftB}>2 Oriental Mango Dessert : </p><p style={styleRightB}>{this.props.item.Details['2 Oriental Mango Dessert']}</p></div>
*/
/*
{this.props.item.Details.map((item)=>(
    <div style={pStyle2}><p style={styleLeft}>{item[0]} : </p><p style={styleRight}>{item[1]}</p> </div>
))}
*/
