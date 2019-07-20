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
      //Find next available cell that is not orange
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
