import React, { Component } from 'react';

import { loadContracts } from "../actions/explorer";

class ContractsList extends Component {
  componentWillMount() {
    this.props.dispatch(loadContracts());
  }

  render() {
    return (
      <div>Contracts List</div>
    );
  }
}

export default ContractsList;
