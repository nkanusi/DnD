import React from "react";
import WhiteSpace from "./WhiteSpace";
import BlackSpace from "./BlackSpace";
import Label from "./Label";
import "./Chessboard.css";

const Chessboard = () => {
  return (
    <div className="board">
      <div className="row">
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
      </div>
      <div className="row">
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
      </div>
      <div className="row">
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
      </div>
      <div className="row">
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
      </div>
      <div className="row">
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
      </div>
      <div className="row">
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
      </div>
      <div className="row">
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
      </div>
      <div className="row">
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
        <BlackSpace />
        <WhiteSpace />
      </div>
      <Label />
    </div>
  );
};

export default Chessboard;
