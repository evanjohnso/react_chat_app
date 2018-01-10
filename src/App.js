import React, { Component } from "react";
import openSocket from "socket.io-client";
import "./App.css";

class App extends Component {
  state = { users: [] };

  componentDidMount() {
    openSocket("http://localhost:3456");
    // fetch("/users")
    //   .then(res => res.json())
    //   .then(users => this.setState({ users }));
  }
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <h3>SUP</h3>
      </div>
    );
  }
}

export default App;
