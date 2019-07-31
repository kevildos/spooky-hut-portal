import React, { Component } from "react";
import TableRow from "./tablerow";
import "./table.css";
import Table from "react-bootstrap/Table";

class MyTable extends Component {
  state = {
    names: ["Jaylane", "Cris", "Jesse", "Kevin"],
    chores: ["Trash", "Recyclables", "Sweep", "Mop"]
  };
  render() {
    return (
      //<table className="table-bordered m-5 Table ">
      //table table-condensed table-bordered
      <Table>
        <thead>
          <tr>
            <th className="invisible">Chores</th>
            {this.state.names.map(name => (
              <th key={name}>{name}</th>
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
      </Table>
    );
  }
}

export default MyTable;
