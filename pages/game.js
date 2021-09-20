import React from "react";
import Head from "next/head";
import GamePage from "../components/GamePage";
const game = () => {
  return (
    <div>
      <Head>
        <title>Tic Tac Toe game</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <GamePage />
    </div>
  );
};

export default game;
