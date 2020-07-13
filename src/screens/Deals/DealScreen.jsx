import React, { Component } from 'react'
import HeaderS from '../../components/Header'
import SidebarS from '../../components/Sidebar/Sidebar'
import { Layout, Breadcrumb } from 'antd';

import './DealScreen.css'

const { Content } = Layout;

export default class DealScreen extends Component {
    render() {
        return (
            <Layout style={{ height: '100vh', overflowY: "hidden" }}>
                <HeaderS />
                <Layout>
                    <SidebarS />
                    <Layout>
                        <Content style={{ padding: '0 50px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Category</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-layout-content">
                                Deal
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
