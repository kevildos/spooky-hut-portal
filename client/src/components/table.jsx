import React, { Component } from "react";
import TableRow from "./tablerow";
import "./table.css";
import trash from "../images/trash-solid.svg";
import recyclabes from "../images/recycle-solid.svg";
import broom from "../images/broom-solid.svg";
import water from "../images/water-solid.svg";

class Table extends Component {
  state = {
    names: ["Jaylane", "Cris", "Jesse", "Kevin"],
    chores: ["Trash", "Recyclables", "Sweep", "Mop"],
    logos: [trash, recyclabes, broom, water],
    columnClass: "col border border-dark m-1 padding-col rounded fixed-col ",
    topRow: "tabledata-toprow "
  };

  render() {
    return (
      <React.Fragment>
        <div className="container table border border-dark rounded ">
          <div className="row ">
            <div className={this.state.columnClass + this.state.topRow}>
              Chores
            </div>
            {this.state.names.map(name => (
              <div
                key={name}
                className={this.state.columnClass + this.state.topRow}
              >
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
              logo={this.state.logos[index]}
              columnClass={this.state.columnClass}
              name={chore}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Table;
