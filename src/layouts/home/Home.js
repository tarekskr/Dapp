import React, {Component} from 'react'

class Home extends Component {
  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <br></br>
            <br></br>
            <img
              src="https://camo.githubusercontent.com/8365043ef61ff2ffba307c1447fed64c9acc7fd1/68747470733a2f2f696d6167652e6962622e636f2f6e414e6379522f6c6f676f5f4d41524b45545f62616e6e65725f322e706e67"
              role="presentation"/>
            {/*learn how to make the above use a local file? */}
            <h1>Welcome to the MARKET decentralized application!</h1>
            {/*
            <h2>Smart Contract Authentication And Login</h2>
            <p>This particular box comes with authentication via a smart contract built-in.</p>
            <p>In the upper-right corner, you'll see a login button. Click it to login with with the Authentication smart contract. If there is no user information for the given address, you'll be redirected to sign up. There are two authenticated routes: "/dashboard", which displays the user's name once authenticated; and "/profile", which allows a user to update their name.</p>
            <h3>Redirect Path</h3>
            <p>This example redirects home ("/") when trying to access an authenticated route without first authenticating. You can change this path in the failureRedriectUrl property of the UserIsAuthenticated wrapper on <strong>line 9</strong> of util/wrappers.js.</p>
            <h3>Accessing User Data</h3>
            <p>Once authenticated, any component can access the user's data by assigning the authData object to a component's props.<br/><code>{"// In component's render function."}<br/>{"const { authData } = this.props"}<br/><br/>{"// Use in component."}<br/>{"Hello { this.props.authData.name }!"}</code></p>
            <h3>Further Reading</h3>
            <p>The React/Redux portions of the authentication functionality are provided by <a href="https://github.com/mjrussell/redux-auth-wrapper" target="_blank">mjrussell/redux-auth-wrapper</a>.</p>
            */}
          </div>
        </div>
      </main>
    )
  }
}

export default Home
