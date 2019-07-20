import React, { Component } from "react";
import TableData from "./tabledata";

class TableRow extends Component {
  state = {
    name: this.props.name,
    columns: this.props.columns,
    actives: [1, 0, 0, 0]
  };

  doIncrement = id => {
    const actives = this.state.actives.slice();
    const indexNeighbor = (id + 1) % 4;
    const indexNeighbor2 = (id + 2) % 4;

    //If cell blank, make orange
    if (!actives[id]) actives[id] = 2;
    //If cell orange, make blank
    else if (actives[id] === 2) actives[id] = 0;
    //If cell blue, make white
    else if (actives[id]) {
      actives[id] = 0;
      //Check if next cell is orange
      if (actives[indexNeighbor] === 2) {
        actives[indexNeighbor] = 0;
        actives[indexNeighbor2] = 1;
      } else {
        actives[indexNeighbor] = 1;
      }
    }
    console.log(actives);

    this.setState({ actives });
  };

  render() {
    return (
      <tr>
        <td>{this.state.name}</td>
        {this.state.actives.map((status, index) => (
          <TableData
            handleIncrement={this.doIncrement}
            key={this.state.columns[index]}
            id={index}
            active={status}
          />
        ))}
      </tr>
    );
  }
}

export default TableRow;
