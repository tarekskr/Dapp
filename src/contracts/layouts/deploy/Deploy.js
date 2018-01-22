import React, { Component } from 'react';
import DeployContractFormContainer from '../../ui/deploycontractform/DeployContractFormContainer.js';
import TestQueryFormContainer from '../../ui/testqueryform/TestQueryFormContainer';

class Deploy extends Component {
  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <DeployContractFormContainer />
            <TestQueryFormContainer />
          </div>
        </div>
      </main>
    );
  }
}

export default Deploy;
