import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import Policy from './components/Policy/Policy';
import * as api from './components/api';
import { Router, Redirect, navigate } from "@reach/router";

class App extends Component {
  state = {
    loggedIn: false,
    accessToken: null
  }

  updateAuth = (values) => {
    return api.signIn(values).then(data => {
      const { access_token } = data;
      this.setState({
        loggedIn: true,
        accessToken: access_token
      }, () => {
        navigate('/policy')
      });
    });
  };

  render() {
    return (
      <div className="App">
        <Router className="Router" >
          {this.state.loggedIn
            ? <Policy path="/policy" accessToken={this.state.accessToken} />
            : <Redirect from="/policy" to="/" noThrow />
          }
          <SignIn path="/" updateAuth={this.updateAuth} />
        </Router>
      </div>
    )
  };

}

export default App;