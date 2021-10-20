import React from 'react';
import 'antd/dist/antd.css';
import './HomePage.css'
import Categories from './../../components/Categories/Categories'
import {appSetting,tabList, contentList} from './../../constants'
import { Layout, Card, Button, Drawer } from 'antd';

const { Header } = Layout;

class HomePage extends React.Component {
  state = {
    key: 'newTrades',
    visible: false,
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
      <div>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Button onClick={() =>  window.open(appSetting.pbDownloadAppLink, "_blank")} className="downloadAppBtn" type="primary" shape="round" icon={appSetting.pbDownloadAppIcon} size="large">
              {appSetting.pbDownloadAppText}
            </Button>
          </Header>

          {this.state.key === "newTrades" ? <Categories /> : "" }

          <Card
            className="tradeList"
            extra={<a onClick={this.showDrawer}>{appSetting.howToTradeText}</a>}
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
          title={appSetting.howToTradeDrawerTitle}
          placement="bottom"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
}

export default HomePage;