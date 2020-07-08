import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { DashboardOutlined, UnorderedListOutlined, UserOutlined, HistoryOutlined } from '@ant-design/icons';
import './Sidebar.css'

const { Sider } = Layout;

export default class Sidebar extends Component {
    render() {
        return (
            <Sider trigger={null}
                collapsible
                breakpoint="lg"
                collapsedWidth="78"
            >
                <Menu
                    onClick={this.handleClick}
                    defaultSelectedKeys={['dashboard']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="dashboard" icon={<DashboardOutlined />}><span>Dashboard</span></Menu.Item>
                    <Menu.Item key="category" icon={<UnorderedListOutlined style={{ fontSize: 20 }} />}><span>Category</span></Menu.Item>
                    <Menu.Item key="items" icon={<UnorderedListOutlined style={{ fontSize: 20 }} />}><span>Items</span></Menu.Item>
                    <Menu.Item key="orders" icon={<UnorderedListOutlined style={{ fontSize: 20 }} />}><span>Orders</span></Menu.Item>
                    <Menu.Item key="users" icon={<UserOutlined style={{ fontSize: 20 }} />}><span>Users</span></Menu.Item>
                    <Menu.Item key="report" icon={<HistoryOutlined style={{ fontSize: 20 }} />}><span>Report</span></Menu.Item>
                </Menu>
            </Sider >
        )
    }
}

