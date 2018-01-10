import React, { Component } from "react";
import openSocket from "socket.io-client";
import "./App.css";

class App extends Component {
  state = { users: [] };
  socket;

  componentDidMount() {
    this.socket = openSocket("http://localhost:3456");
    this.socket.on("news", data => console.log(data.hello));
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
