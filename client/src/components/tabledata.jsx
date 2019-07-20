import React, { Component } from "react";

class TableData extends Component {
  state = {
    active: false
  };

  render() {
    return (
      <td
        onClick={() => this.props.handleIncrement(this.props.id)}
        className={this.getClass()}
      />
    );
  }
  getClass() {
    const { active } = this.props;
    if (active) {
      if (active === 2) return "bg-warning";
      else return "bg-info";
    } else return "";
  }
}

export default TableData;
