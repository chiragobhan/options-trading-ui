import React from 'react';
import 'antd/dist/antd.css';
import './HomePage.css'
import Categories from './../Categories/Categories'
import NewTrades from '../NewTrades/NewTrades'
import TradesPlayed from '../TradesPlayed/TradesPlayed'
import TradesTBD from '../TradesTBD/TradesTBD'
import { Layout, Menu, Card, Button, Drawer } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  FireOutlined,
  RiseOutlined,
  WalletOutlined,
  DownloadOutlined,
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
  {
    key: 'tradesTBD',
    tab: 'Trades TBD',
  },
];

const contentList = {
  newTrades: <NewTrades />,
  tradesPlayed: <TradesPlayed />,
  tradesTBD: <TradesTBD />,
};

class HomePage extends React.Component {
  state = {
    collapsed: true,
    key: 'newTrades',
    visible: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onTabChange = (key, type) => {
    this.setState({ [type]: key });
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
    return (
      <Layout>

        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo-wrapper">
            <img src="./img/probo-logo.svg" alt="Probo Logo" />
            {this.state.collapsed ? '' : <span className="logo">Probo</span> }
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
          <Menu.Item style={{fontSize: '18px'}} disabled key="1" icon={<WalletOutlined style={{fontSize: '18px', color: 'white'}} />}>
              <span style={{color: 'white' }}>100.00</span>
            </Menu.Item>
            <Menu.Item key="2" icon={<RiseOutlined />}>
              Trades
            </Menu.Item>
            <Menu.Item key="3" icon={<FireOutlined />}>
              Challenge
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
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
            <Button onClick={() =>  window.open("https://probo.in/", "_blank")} className="downloadAppBtn" type="primary" shape="round" icon={<DownloadOutlined />} size="large">
              Download App
            </Button>
          </Header>

          <Categories />

          <Card
            className="tradeList"
            style={{ width: '100%' }}
            extra={<a onClick={this.showDrawer} href="#">How to Trade?</a>}
            tabList={tabList}
            activeTabKey={this.state.key}
            onTabChange={key => {
              this.onTabChange(key, 'key');
            }}
          >
            {contentList[this.state.key]}
          </Card>

        </Layout>

        <Drawer
          className="howToTrade"
          title="How To Trade?"
          placement="bottom"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Some contents...</p>
        </Drawer>

      </Layout>
    );
  }
}

export default HomePage;