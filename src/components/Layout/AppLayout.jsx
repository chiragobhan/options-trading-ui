import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import './AppLayout.css';
import NavMenu from './../../components/Layout/NavMenu'

class AppLayout extends React.Component {
  render() {
    return (
        <Layout>
          <NavMenu />
        </Layout>
    );
  }
}

export default AppLayout;