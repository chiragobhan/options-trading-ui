import React from 'react';
import { Layout, Menu } from 'antd';
import { appSetting, navMenu } from "./../../constants";
import "./NavMenu.css";
import {
  WalletOutlined,
} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const { Sider } = Layout;

class NavMenu extends React.Component {
  state = {
    collapsed: true,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Router>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
              <div className="logo-wrapper">
                <img src={appSetting.pbIcon} alt={appSetting.pbIconAlt} />
                {this.state.collapsed ? '' : <span className="logo">{appSetting.pbAppName}</span> }
              </div>
              <Menu.Item style={{fontSize: '18px'}} disabled key="1" icon={<WalletOutlined style={{fontSize: '18px', color: 'white'}} />}>
                  <span style={{color: 'white' }}>₹ 100.00</span>
                </Menu.Item>
                {navMenu.map(({ key, icon, slug, displayName }) => (
                  <Menu.Item key={key} icon={icon}>
                    <Link to={slug}>{displayName}</Link>
                  </Menu.Item>
                ))}
            </Menu>

            <Switch>
              {navMenu.map(({ key, slug, component }) => (
                <Route
                  key={key}
                  path={slug}
                  render={() => <div>{component}</div>}
                />
              ))}
              <Route exact path="/">
                <Redirect to="/trades" />
            </Route>
            </Switch>
          </Router>
        </Sider>
    );
  }
}

export default NavMenu;