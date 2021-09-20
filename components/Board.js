import React from "react";
import Square from "./Square";
import style from "./styles.module.css";

const board = ({ squares, onClick }) => {
  return (
    <div className={style.board}>
      {squares.map((item, i) => (
        <Square key={i} value={item} onclick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default board;
