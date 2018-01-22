import React, { Component } from 'react';
import { Router, Route } from 'react-router';

// Layouts
import Home from './layouts/home/Home';
import Deploy from './contracts/layouts/deploy/Deploy';
import Explorer from './contracts/layouts/explorer/Explorer';

// Components
import Header from './components/Header';

// Styles
import './css/oswald.css';
import './css/open-sans.css';
import './css/pure-min.css';
import './App.css';
import 'antd/dist/antd.min.css';

class App extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/contract/deploy" component={Deploy} />
          <Route path="/contract/explore" component={Explorer} />
        </div>
      </Router>
    );
  }
}

export default App;
