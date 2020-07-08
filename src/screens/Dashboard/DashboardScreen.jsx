import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './DashboardScreen.css'
import HeaderS from '../../components/Header/Header'


const { Content, Sider } = Layout;
const { SubMenu } = Menu;

export default class DashboardScreen extends Component {
  render() {
    return (
      <Layout style={{ height: '100vh', overflowY: "hidden" }}>
        <HeaderS />
        <Layout>
          <Sider trigger={null}
            collapsible
            breakpoint="lg"
            collapsedWidth="78"
            onCollapse={(collapsed, type) => { }}>
            <Menu
              onClick={this.handleClick}
              defaultSelectedKeys={['dashboard']}
            >
              <Menu.Item key="dashboard">Dashboard</Menu.Item>
              <Menu.Item key="category">Category</Menu.Item>
              <Menu.Item key="items">Items</Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content">
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
                Content
                <br />
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

// export default DashboardScreen;
