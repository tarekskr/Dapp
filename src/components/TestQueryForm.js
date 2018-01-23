import React, { Component } from 'react';

class TestQueryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oracleDataSource: 'URL',
      oracleQuery:
        'json(https://api.kraken.com/0/public/Ticker?pair=ETHUSD).result.XETHZUSD.c.0'
    };
  }

  onInputChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleDeploy(event) {
    event.preventDefault();
    this.props.onTestQuery(this.state);
  }

  render() {
    return (
      <form
        className="pure-form pure-form-stacked"
        onSubmit={this.handleDeploy.bind(this)}
      >
        <fieldset>
          <input
            id="oracleDataSource"
            type="text"
            value={this.state.oracleDataSource}
            onChange={this.onInputChange.bind(this)}
            placeholder="Oraclize.it data source"
          />
          <input
            id="oracleQuery"
            type="text"
            value={this.state.oracleQuery}
            onChange={this.onInputChange.bind(this)}
            placeholder="Oraclize.it Query"
          />
          <br />
          <button type="test" className="pure-button pure-button-primary">
            Test Query
          </button>
        </fieldset>
      </form>
    );
  }
}

export default TestQueryForm;
