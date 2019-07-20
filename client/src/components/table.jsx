import React, { Component } from "react";
import TableRow from "./tablerow";

class Table extends Component {
  state = {
    names: ["Jaylane", "Cris", "Jesse", "Kevin"],
    chores: ["Trash", "Recyclables", "Sweep", "Mop"]
  };
  render() {
    return (
      <table className="table table-condensed table-bordered m-5 ">
        <thead>
          <tr>
            <th className="invisible">Chores</th>
            {this.state.names.map(key => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.state.chores.map(chore => (
            <TableRow key={chore} columns={this.state.names} name={chore} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
