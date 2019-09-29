import React from "react";
import "./tabledata.css";
import logo from "./trash-solid.svg";

const TableData = props => {
  const getClassBlock = props => {
    let classes = "tabledata col ";
    const { activeStatus } = props;
    if (activeStatus) {
      if (activeStatus === 2) return classes + "td-orange";
      else return classes + "td-blue";
    } else return classes + "";
  };

  const getClassImage = props => {
    let classes = "";
    const { activeStatus } = props;
    if (activeStatus) {
      if (activeStatus === 2) return classes + "invisible";
      else return classes + "";
    } else return classes + "invisible";
  };

  return (
    <div
      onClick={() => props.handleIncrement(props.id)}
      className={getClassBlock(props)}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src={logo}
          style={{ display: "inline-block" }}
          className={getClassImage(props)}
          height="42"
          width="24"
        ></img>
      </div>
    </div>
  );
};

export default TableData;
