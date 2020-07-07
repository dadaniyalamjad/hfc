import React, { Component } from "react";
import { Layout, Typography, Avatar, Menu, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import "./Header.css"

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
const { SubMenu } = Menu;

export default class HeaderComponent extends Component {
  render() {
    return (

      <Layout style={{ height: '100vh', overflowY: "hidden" }}>
        <Header className="container-fluid py-3">
          <Avatar icon={<UserOutlined />} style={{ float: 'right' }} />
          <Title style={{ color: 'white' }} level={3}>Huzaifa Fast Food</Title>
        </Header>
        <Layout>
          <Sider trigger={null}
            collapsible
            breakpoint="xxl"
            collapsedWidth="78"
            onCollapse={(collapsed, type) => { }}>
            <Menu
              onClick={this.handleClick}
              // style={{ width: 200 }}
              defaultSelectedKeys={['dashboard']}
              defaultOpenKeys={['sub1']}
              mode="inline"
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
