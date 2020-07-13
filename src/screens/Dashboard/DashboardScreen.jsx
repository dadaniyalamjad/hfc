import React, { Component } from "react";
import { Layout, Breadcrumb } from 'antd';

import './DashboardScreen.css'
import HeaderS from '../../components/Header/Header'
import SidebarS from '../../components/Sidebar'


const { Content } = Layout;

export default class DashboardScreen extends Component {
  render() {
    return (
      <Layout style={{ height: '100vh', overflowY: "hidden" }}>
        <HeaderS />
        <Layout>
          <SidebarS />
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
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

              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

// export default DashboardScreen;
