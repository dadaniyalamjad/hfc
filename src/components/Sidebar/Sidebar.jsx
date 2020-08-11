import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { DashboardOutlined, UnorderedListOutlined, UserOutlined, HistoryOutlined } from '@ant-design/icons';
import './Sidebar.css'

const { Sider } = Layout;

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyValue: "1"
        };
    }


    componentWillMount() {
        const { pathname } = this.props.params.location;
        console.log('pathname', pathname)
        if (pathname === "/dashboard") {
            this.setState({ keyValue: "1" });
        } else if (pathname === "/category") {
            this.setState({ keyValue: "2" });
        } else if (pathname === "/deal") {
            this.setState({ keyValue: "3" });
        }
    }

    appNavigation = url => {
        this.props.params.history.push(url);
    };

    render() {
        const { keyValue } = this.state;
        return (
            <Sider trigger={null}
                collapsible
                breakpoint="lg"
                collapsedWidth="78"
            >
                <Menu
                    onClick={this.handleClick}
                    defaultSelectedKeys={keyValue}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="1" icon={<DashboardOutlined />} onClick={() => this.appNavigation("/dashboard")}><span>Dashboard</span></Menu.Item>
                    <Menu.Item key="2" icon={<UnorderedListOutlined />} onClick={() => this.appNavigation("/category")}><span>Category</span></Menu.Item>
                    <Menu.Item key="3" icon={<UnorderedListOutlined />} onClick={() => this.appNavigation("/deal")}><span>Items</span></Menu.Item>
                    <Menu.Item key="4" icon={<UnorderedListOutlined />}><span>Orders</span></Menu.Item>
                    <Menu.Item key="5" icon={<UserOutlined />}><span>Users</span></Menu.Item>
                    <Menu.Item key="6" icon={<HistoryOutlined />}><span>Report</span></Menu.Item>
                </Menu>
            </Sider >
        )
    }
}

