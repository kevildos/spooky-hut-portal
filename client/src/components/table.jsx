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
        <div className="container table">
          <div className="row ">
            <div className="col tabledata-toprow">Chores</div>
            {this.state.names.map(name => (
              <div key={name} className="col tabledata-toprow">
                {name}
              </div>
            ))}
          </div>

          {this.state.chores.map((chore, index) => (
            <TableRow
              //className={"tablerow-" + index}
              key={chore}
              rowIndex={index}
              columns={this.state.names}
              name={chore}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Table;
