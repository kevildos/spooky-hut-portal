import React from "react";
import "./tabledata.css";

const TableData = props => {
  const getClass = props => {
    let classes = "TableData ";
    const { active } = props;
    if (active) {
      if (active === 2) return classes + "bg-warning";
      else return classes + "bg-info";
    } else return classes + "";
  };

  return (
    <td
      onClick={() => props.handleIncrement(props.id)}
      className={getClass(props)}
    />
  );
};

export default TableData;
