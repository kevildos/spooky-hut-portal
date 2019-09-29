import React, { Component } from "react";
import TableData from "./tabledata";
import "./tablerow.css";

class TableRow extends Component {
  state = {
    names: [],
    activeCells: [0, 0, 0, 0]
  };

  constructor(props) {
    super(props);
    this.state = {
      names: ["first", "second", "third", "fourth"],
      activeCells: [0, 0, 0, 0]
    };
  }

  async getAPI(index) {
    const response = await fetch(`/api/${this.state.names[index]}`);
    const activeCells = await response.json();
    this.setState({ activeCells });
  }

  async putAPI(index) {
    const response = await fetch(`/api/${this.state.names[index]}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.activeCells)
    });
    //console.log(response);
  }

  componentWillMount() {
    this.getAPI(this.props.rowIndex);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) this.putAPI(this.props.rowIndex);
  }

  doIncrement = id => {
    const activeCells = this.state.activeCells.slice();
    const indexNeighbor = (id + 1) % 4;

    //Determine if cell should be blank, orange, or where to place blue after skipping oranges
    if (!activeCells[id]) {
      if (activeCells.filter(res => res !== 0).length === 0)
        activeCells[id] = 1;
      else activeCells[id] = 2;
    } else if (activeCells[id] === 2) activeCells[id] = 0;
    else if (activeCells[id]) {
      activeCells[id] = 0;
      let index = indexNeighbor;
      while (index !== id) {
        if (activeCells[index] === 2) {
          activeCells[index] = 0;
        } else if (activeCells[index] === 0) {
          activeCells[index] = 1;
          break;
        }
        index = (index + 1) % 4;
      }
      if (index === id) activeCells[id] = 1;
    }

    this.setState({ activeCells });
  };

  render() {
    return (
      <div className="row ">
        <div className="col-3">{this.props.name}</div>
        {this.state.activeCells.map((status, index) => (
          <TableData
            handleIncrement={this.doIncrement}
            key={this.props.columns[index]}
            id={index}
            activeStatus={status}
          />
        ))}
      </div>
    );
  }
}

export default TableRow;
