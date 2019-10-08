import React, { Component } from "react";
import TableRow from "./tablerow";
import "./table.css";
import trash from "../images/trash-solid.svg";
import recyclabes from "../images/recycle-solid.svg";
import broom from "../images/broom-solid.svg";
import water from "../images/water-solid.svg";
import ghost from "../images/ghost-solid.svg";

class Table extends Component {
  state = {
    names: ["Jaylane", "Cris", "Jesse", "Kevin"],
    chores: ["Trash", "Recyclables", "Sweep", "Mop"],
    logos: [trash, recyclabes, broom, water],
    columnClass:
      "col-five border border-dark m-1 padding-two rounded fixed-col ",
    borderCells: "border-class "
  };

  render() {
    return (
      <React.Fragment>
        <div className="container table border border-dark rounded ">
          <div className="row " style={{ whiteSpace: "nowrap" }}>
            <div className={this.state.columnClass + this.state.borderCells}>
              <img id="ghost" src={ghost} height="50" width="57" />
            </div>
            {this.state.names.map(name => (
              <div
                key={name}
                className={this.state.columnClass + this.state.borderCells}
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
              borderCells={this.state.borderCells}
              name={chore}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Table;
