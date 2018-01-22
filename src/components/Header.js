import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavItem from './NavItem';

import './Header.css';
import logo from '../img/market-logo-small.png';

class Header extends Component {
  render() {
    return (
      <header id="header" className="clearfix">
        <div className="ant-row">
          <div className="ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-5 ant-col-xl-5 ant-col-xxl-4">
            <Link to="/" id="logo">
              <img src={logo} alt="Market Protocol Logo" />
            </Link>
          </div>
          <div className="ant-col-xs-0 ant-col-sm-0 ant-col-md-18 ant-col-lg-19 ant-col-xl-19 ant-col-xxl-20">
            <ul className="ant-menu menu-site ant-menu-light ant-menu-root ant-menu-horizontal" role="menu" id="nav">
              <NavItem to="/contract/deploy">Deploy Contracts</NavItem>
              <NavItem to="/contract/explore">Explore Contracts</NavItem>
              <NavItem to="/exchange">Sim Exchange</NavItem>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;



