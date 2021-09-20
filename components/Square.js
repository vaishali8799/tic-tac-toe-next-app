import React from "react";
import style from "./styles.module.css";
const Square = ({ value, onclick }) => {
  return (
    <button className={style.squares} onClick={onclick}>
      {value}
    </button>
  );
};

export default Square;
