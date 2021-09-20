import React, { useState } from "react";
import  { useRouter } from "next/router";
import style from "./styles.module.css";
import { calculateWinner } from "./helper";
import Board from "./Board";
const GamePage = () => {
  const router = useRouter();
  const [data, setdata] = useState([Array(9).fill(null)]);
  const [step, setstep] = useState(0);
  const [isNext, setisNext] = useState(true);
  const winner = calculateWinner(data[step]);
  const [end, setend] = useState(false);
  const turn = isNext ? "X" : "O";
  const setItem = (item) => {
    sessionStorage.setItem("Winner", item);
  };
  console.log(step);
  const handleClick = (i) => {
    const historyPoint = data.slice(0, step + 1);
    const curr = historyPoint[step];
    const squares = [...curr];
    if (squares[i] && step === 9) {
      router.push("../result");
      setItem("Nobody");
      return;
    }
    if (squares[i]) {
      return;
    }
    if (winner) {
      if (turn == "O") {
        setItem("X");
        router.push("../result");
        //console.log("X")
      } else if (step == 8) {
        router.push("../result");
      } else {
        console.log("O");
        router.push("../result");
        // setItem('O');
        // localStorage.setItem('Winner', 'O');
      }
      setend(true);
      return;
    }
    squares[i] = turn;
    setdata([...historyPoint, squares]);
    setstep(historyPoint.length);
    setisNext(!isNext);
  };
  return (
    <div className={style.gridcontainer}>
      <h1>Tic tac toe</h1>
      <p>Now, its {turn} turn</p>
      <Board squares={data[step]} onClick={handleClick} />
      {end ? <h6>Game Ended</h6> : ""}
    </div>
  );
};

export default GamePage;
