import React from 'react'
import {Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon, Avatar, Card} from 'antd';
import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;
const { Option } = Select;
const plainOptions = ['Breakfast', 'Lunch', 'Dinner', 'Flights', 'In-city Public Transport', 'In-city Private Transport',
'Drinks (Social)'];
const defaultCheckedList = ['Breakfast']
class TripFormComp extends React.Component {
    state = {
        visible: false,
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
    };

    onChange = checkedList => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
            checkAll: checkedList.length === plainOptions.length,
        });
    };

    onCheckAllChange = e => {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{width:"fit-content"}}>
                <Button type="primary" onClick={this.showDrawer} style={{marginTop:25}}>
                    <Icon type="plus" /> New Trip
                </Button>
                <Drawer
                    title="Create a new trip"
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label="Location">
                                    {getFieldDecorator('name', {
                                        rules: [{ required: true, message: 'Location' }],
                                    })(<Input placeholder="Enter place of visit" />)}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Dates of Travel">
                                    {getFieldDecorator('dateTime', {
                                        rules: [{ required: true, message: 'Please choose the dateTime' }],
                                    })(
                                        <DatePicker.RangePicker
                                            style={{ width: '100%' }}
                                            getPopupContainer={trigger => trigger.parentNode}
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label="Purpose">
                                    {getFieldDecorator('purpose', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Enter purpose and nature of the trip',
                                            },
                                        ],
                                    })(<Input placeholder="Enter purpose and nature of the trip" />)}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Approver">
                                    {getFieldDecorator('approver', {
                                        rules: [{ required: true, message: 'Please choose the approver' }],
                                    })(
                                        <Select placeholder="Please choose the approver">
                                            <Option value="jack">Jack Ma</Option>
                                            <Option value="tom">Tom Liu</Option>
                                        </Select>,
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item label="Expenses Included">
                                    {getFieldDecorator('description', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'please enter url description',
                                            },
                                        ],
                                    })(<Checkbox
                                        indeterminate={this.state.indeterminate}
                                        onChange={this.onCheckAllChange}
                                        checked={this.state.checkAll} >
                                        All
                                    </Checkbox>

                                    )}
                                    <CheckboxGroup
                                        options={plainOptions}
                                        value={this.state.checkedList}
                                        onChange={this.onChange}
                                        style={{display:"flex", flexDirection:"column"}}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            bottom: 0,
                            width: '100%',
                            borderTop: '1px solid #e9e9e9',
                            padding: '10px 16px',
                            background: '#fff',
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                        <Button onClick={this.onClose} type="primary">
                            Submit
                        </Button>
                    </div>
                </Drawer>
            </div>
        );
    }
}

const TripForm = Form.create()(TripFormComp);
export default TripForm;