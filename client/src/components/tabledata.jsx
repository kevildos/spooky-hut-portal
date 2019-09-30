import React from "react";
import "./tabledata.css";
import cross from "../images/times-solid.svg";

const TableData = props => {
  const getClass = props => {
    let classes = props.columnClass + "tabledata ";
    const { activeStatus } = props;
    if (activeStatus) {
      if (activeStatus === 2) return classes + "td-orange";
      else return classes + "td-blue";
    } else return classes + "";
  };

  const getIcon = props => {
    let image = "";
    const { activeStatus } = props;
    if (activeStatus) {
      if (activeStatus === 2) image = cross;
      else image = props.logo;

      return (
        <img
          src={image}
          className="table-image"
          style={{ display: "inline-block" }}
          height="42"
          width="48"
        ></img>
      );
    } else return <div />;
  };

  return (
    <div
      onClick={() => props.handleIncrement(props.id)}
      className={getClass(props)}
    >
      <div style={{ textAlign: "center" }}>{getIcon(props)}</div>
    </div>
  );
};

export default TableData;
