import React, {Component} from 'react'

class DeployContractForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contractName: 'ETH/BTC',
      baseTokenAddress: '0x123',
      priceFloor: 0,
      priceCap: 150,
      priceDecimalPlaces: 2,
      qtyDecimalPlaces: 2,
      expirationTimeStamp: Math.floor(Date.now() / 1000) + 28 * 86400, //default to 28 days from now
      oracleDataSource: "URL",
      oracleQuery: "json(https://api.kraken.com/0/public/Ticker?pair=ETHUSD).result.XETHZUSD.c.0",
      oracleQueryRepeatSeconds: 86400
    }
  }

  onInputChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleDeploy(event) {
    event.preventDefault()
    this.props.onDeployContractFormDeploy(this.state)
  }

  render() {
    return <form className="pure-form pure-form-stacked" onSubmit={this.handleDeploy.bind(this)}>
      <fieldset>

        <input id="contractName" type="text" value={this.state.contractName}
               onChange={this.onInputChange.bind(this)}
               placeholder="Name"/>
        <input id="baseTokenAddress" type="text" value={this.state.baseTokenAddress}
               onChange={this.onInputChange.bind(this)} placeholder="Base Token Address"/>
        <input id="priceFloor" type="number" value={this.state.priceFloor}
               onChange={this.onInputChange.bind(this)}
               placeholder="Price Floor"/>
        <input id="priceCap" type="number" value={this.state.priceCap} onChange={this.onInputChange.bind(this)}
               placeholder="Price Cap"/>
        <input id="priceDecimalPlaces" type="number" value={this.state.priceDecimalPlaces}
               onChange={this.onInputChange.bind(this)} placeholder="Price Decimal Places"/>
        <input id="qtyDecimalPlaces" type="number" value={this.state.qtyDecimalPlaces}
               onChange={this.onInputChange.bind(this)} placeholder="Qty Decimal Places"/>
        <input id="expirationTimeStamp" type="number" value={this.state.expirationTimeStamp}
               onChange={this.onInputChange.bind(this)} placeholder="Expiration Time Stamp"/>
        <input id="oracleDataSource" type="text" value={this.state.oracleDataSource}
               onChange={this.onInputChange.bind(this)} placeholder="Oraclize.it data source"/>
        <input id="oracleQuery" type="text" value={this.state.oracleQuery}
               onChange={this.onInputChange.bind(this)}
               placeholder="Oraclize.it Query"/>
        <input id="oracleQueryRepeatSeconds" type="number" value={this.state.oracleQueryRepeatSeconds}
               onChange={this.onInputChange.bind(this)} placeholder="Query Repeat Seconds"/>

        <br/>

        <button type="deploy" className="pure-button pure-button-primary">Deploy Contract</button>
      </fieldset>
    </form>
  }
}

export default DeployContractForm
