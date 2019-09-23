import React, { Component } from "react";
import TableRow from "./tablerow";
import "./table.css";

class Table extends Component {
  state = {
    names: ["Jaylane", "Cris", "Jesse", "Kevin"],
    chores: ["Trash", "Recyclables", "Sweep", "Mop"]
  };
  render() {
    return (
      <React.Fragment>
        <table className="table-bordered Table ">
          <thead>
            <tr>
              <th className="invisible">Chores</th>
              {this.state.names.map(name => (
                <th key={name} className="TableDataTopRow">
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.chores.map((chore, index) => (
              <TableRow
                key={chore}
                rowIndex={index}
                columns={this.state.names}
                name={chore}
              />
            ))}
          </tbody>
        </table>

        <i src="trash-solid.svg" height="42" width="24"></i>
      </React.Fragment>
    );
  }
}

export default Table;
