import React, { Component } from 'react';
import { Router, Route } from 'react-router';

import { routes } from './routes';

// Components
import Header from './components/Header';

// Styles
import './css/oswald.css';
import './css/open-sans.css';
import 'antd/dist/antd.min.css';
import './App.css';

import { Layout } from 'antd';

const { Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Layout>
          <Header />
          <Content style={{height: 'calc(100vh - 134px)', padding: '20px 30px', background: '#FFF'}}>
            { routes.map((route) => (
              <Route key={route.path} {...route} />
            ) ) }
          </Content>

          <Footer className="text-center">
            Dapp ©2018 Created by <a href="https://marketprotocol.io" target="_blank" rel="noopener noreferrer">MarketProtocol</a>
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
