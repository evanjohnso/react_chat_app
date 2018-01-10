import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = { users: [] };

  componentWillMount() {
    // let socket =
  }

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  render() {
    console.log(this.state.users);
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user => <div key={user.id}>{user.username}</div>)}
      </div>
    );
  }
}

export default App;
