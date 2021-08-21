import React from "react";
import WhiteSpace from "./WhiteSpace";
import BlackSpace from "./BlackSpace";
import Label from "./Label";
import "./Chessboard.css";

//Pieces
import Pawn from "./Pieces/Pawn";
import Knight from "./Pieces/Knight";
import Rook from "./Pieces/Rook";
import Bishop from "./Pieces/Bishop";
import Queen from "./Pieces/Queen";
import King from "./Pieces/King";

const Chessboard = () => {
  return (
    <div className="grid-container">
      <div className="row">
        <WhiteSpace id="1" />
        <BlackSpace id="2" />
        <WhiteSpace id="3" />
        <BlackSpace id="4" />
        <WhiteSpace id="5" />
        <BlackSpace id="6" />
        <WhiteSpace id="7" />
        <BlackSpace id="8" />
      </div>
      <div className="row">
        <BlackSpace id="9" />
        <WhiteSpace id="10" />
        <BlackSpace id="11" />
        <WhiteSpace id="12" />
        <BlackSpace id="13" />
        <WhiteSpace id="14" />
        <BlackSpace id="15" />
        <WhiteSpace id="16" />
      </div>
      <div className="row">
        <WhiteSpace id="17" />
        <BlackSpace id="18" />
        <WhiteSpace id="19" />
        <BlackSpace id="20" />
        <WhiteSpace id="21" />
        <BlackSpace id="22" />
        <WhiteSpace id="23" />
        <BlackSpace id="24" />
      </div>
      <div className="row">
        <BlackSpace id="25" />
        <WhiteSpace id="26" />
        <BlackSpace id="27" />
        <WhiteSpace id="28" />
        <BlackSpace id="29" />
        <WhiteSpace id="30" />
        <BlackSpace id="31" />
        <WhiteSpace id="32" />
      </div>
      <div className="row">
        <WhiteSpace id="33" />
        <BlackSpace id="34" />
        <WhiteSpace id="35" />
        <BlackSpace id="36" />
        <WhiteSpace id="37" />
        <BlackSpace id="38" />
        <WhiteSpace id="39" />
        <BlackSpace id="40" />
      </div>
      <div className="row">
        <BlackSpace id="41" />
        <WhiteSpace id="42" />
        <BlackSpace id="43" />
        <WhiteSpace id="44" />
        <BlackSpace id="45" />
        <WhiteSpace id="46" />
        <BlackSpace id="47" />
        <WhiteSpace id="48" />
      </div>
      <div className="row">
        <WhiteSpace id="49" />
        <BlackSpace id="50" />
        <WhiteSpace id="51" />
        <BlackSpace id="52" />
        <WhiteSpace id="53" />
        <BlackSpace id="54" />
        <WhiteSpace id="55" />
        <BlackSpace id="56" />
      </div>
      <div className="row">
        <BlackSpace id="57" />
        <WhiteSpace id="58" />
        <BlackSpace id="59" />
        <WhiteSpace id="60" />
        <BlackSpace id="61" />
        <WhiteSpace id="62" />
        <BlackSpace id="63" />
        <WhiteSpace id="64" />
      </div>
      <Label />

      <Pawn />
      <Knight />
      <Rook />
      <Bishop />
      <Queen />
      <King />
    </div>
  );
};

export default Chessboard;
