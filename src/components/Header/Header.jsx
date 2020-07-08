import React, { Component } from "react";
import { Layout, Typography, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import "./Header.css"

const { Header } = Layout;
const { Title } = Typography;

export default class HeaderComponent extends Component {
  render() {
    return (
      <Header className="container-fluid py-3">
        <Avatar icon={<UserOutlined />} style={{ float: 'right' }} />
        <Title style={{ color: 'white' }} level={3}>Huzaifa Fast Food</Title>
      </Header>
    );
  }
}
