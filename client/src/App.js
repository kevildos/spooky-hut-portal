import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/table";

class App extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:3001/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }
  render() {
    return (
      <React.Fragment>
        <Table />
        <p>{this.state.apiResponse}</p>
      </React.Fragment>
    );
  }
}

export default App;
