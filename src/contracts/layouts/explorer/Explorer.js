import React, { Component } from 'react';
import LoadContractsButtonContainer from '../../ui/loadcontractsbutton/LoadContractsButtonContainer';

class Explorer extends Component {
  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <p>Loads deployed and whitelisted contracts from the blockchain</p>
            <LoadContractsButtonContainer />
          </div>
        </div>
      </main>
    );
  }
}

export default Explorer;
