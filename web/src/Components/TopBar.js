import React from 'react'
import {Layout, Menu, Breadcrumb, Avatar, Card} from 'antd';
import TripForm from "./TripsForm";
import Text from "antd/lib/typography/Text";
import TripList from "../App";

const { Header, Content, Footer } = Layout;
class TopBar extends React.Component{
    render(){
        return(
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 100, width: '100%', display:"flex", flexDirection: 'row', justifyContent:"space-between",
                height:"fit-content"}}>
                    <TripForm/>
                    <Card style={{width:"fit-content", backgroundColor:"#001529", border:0,
                    display:"flex", justifyContent:"space-between", flexDirection:'row'}}>
                            <Text style={{color:"white", padding:"10px"}}>Jane Doe</Text>
                            {/*<Text type="secondary" style={{color:"white"}}>Legal Department</Text>*/}
                        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                    </Card>

                </Header>
                <Footer style={{ textAlign: 'center' }}>Re:imburse ©2019 Created by Brown-ish</Footer>
            </Layout>
        );
    }
}

export default TopBar
