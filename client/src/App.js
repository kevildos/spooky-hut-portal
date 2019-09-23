import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/table";

class App extends Component {
  state = {
    names: [],
    rows: []
  };
  render() {
    return (
      <React.Fragment>
        <Table />
      </React.Fragment>
    );
  }
}

export default App;
