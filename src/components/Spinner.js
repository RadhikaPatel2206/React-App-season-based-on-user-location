import React from "react";

const Spinner = ({ message }) => {
  return (
    <div className="ui">
      <div className="ui active dimmer">
        <div className="ui text loader" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "3rem" }}>{message}</div>
      </div>
      <p></p>
    </div>
  );
};

export default Spinner;
