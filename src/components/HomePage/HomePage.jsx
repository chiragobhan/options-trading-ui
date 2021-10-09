import React from 'react';
import 'antd/dist/antd.css';
import './HomePage.css'
import Categories from './../Categories/Categories'
import NewTrades from '../NewTrades/NewTrades'
import TradesPlayed from '../TradesPlayed/TradesPlayed'
import { Layout, Menu, Card } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  FireOutlined,
  RiseOutlined,
} from '@ant-design/icons';

const { Header, Sider } = Layout;

const tabList = [
  {
    key: 'newTrades',
    tab: 'New Trades',
  },
  {
    key: 'tradesPlayed',
    tab: 'Trades Played',
  },
];

const contentList = {
  newTrades: <NewTrades />,
  tradesPlayed: <TradesPlayed />,
};

class HomePage extends React.Component {
  state = {
    collapsed: true,
    key: 'newTrades',
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };

  render() {
    return (
      <Layout>

        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo-wrapper">
            <img src="./img/probo-logo.svg" alt="Probo Logo" />
            {this.state.collapsed ? '' : <span className="logo">Probo</span> }
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<RiseOutlined />}>
              Trades
            </Menu.Item>
            <Menu.Item key="2" icon={<FireOutlined />}>
              Challenge
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              My Profile
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            <span className="sub-title">Predict the future with Probo</span>
          </Header>

          <Categories />

          <Card
            className="tradeList"
            style={{ width: '100%' }}
            extra={<a href="#">How to Trade?</a>}
            tabList={tabList}
            activeTabKey={this.state.key}
            onTabChange={key => {
              this.onTabChange(key, 'key');
            }}
          >
            {contentList[this.state.key]}
          </Card>

        </Layout>

      </Layout>
    );
  }
}

export default HomePage;