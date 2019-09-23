import React from "react";
import "./tabledata.css";

const TableData = props => {
  const getClass = props => {
    let classes = "TableData ";
    const { activeStatus } = props;
    if (activeStatus) {
      if (activeStatus === 2) return classes + "bg-warning";
      else return classes + "bg-info";
    } else return classes + "";
  };

  return (
    <td
      onClick={() => props.handleIncrement(props.id)}
      className={getClass(props)}
    >
      <i src="../../public/trash-solid.svg" height="1" width="1"></i>
    </td>
  );
};

export default TableData;
