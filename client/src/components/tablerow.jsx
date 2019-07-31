import React, { Component } from "react";
import TableData from "./tabledata";

class TableRow extends Component {
  state = {
    names: [],
    actives: [0, 0, 0, 0]
  };

  constructor(props) {
    super(props);
    this.state = {
      names: ["first", "second", "third", "fourth"],
      actives: [0, 0, 0, 0]
    };
  }

  async getAPI(index) {
    const response = await fetch(
      `http://localhost:3001/${this.state.names[index]}`
    );
    const actives = await response.json();
    this.setState({ actives });
  }

  async putAPI(index) {
    const response = await fetch(
      `http://localhost:3001/${this.state.names[index]}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.actives)
      }
    );
  }

  componentWillMount() {
    this.getAPI(this.props.rowIndex);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) this.putAPI(this.props.rowIndex);
  }

  doIncrement = id => {
    const actives = this.state.actives.slice();
    const indexNeighbor = (id + 1) % 4;

    //Determine if cell should be blank, orange, or where to place blue after skipping oranges
    if (!actives[id]) actives[id] = 2;
    else if (actives[id] === 2) actives[id] = 0;
    else if (actives[id]) {
      actives[id] = 0;
      let index = indexNeighbor;
      while (index !== id) {
        if (actives[index] === 2) {
          actives[index] = 0;
        } else if (actives[index] === 0) {
          actives[index] = 1;
          break;
        }
        index = (index + 1) % 4;
      }
      if (index === id) actives[id] = 1;
    }

    this.setState({ actives });
  };

  render() {
    return (
      <tr>
        <td classname="TableDataFirstColumn">{this.props.name}</td>
        {this.state.actives.map((status, index) => (
          <TableData
            handleIncrement={this.doIncrement}
            key={this.props.columns[index]}
            id={index}
            active={status}
          />
        ))}
      </tr>
    );
  }
}

export default TableRow;
