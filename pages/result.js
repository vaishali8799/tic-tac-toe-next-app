import React from "react";
import Head from "next/head";
import Link from "next/link";
const result = () => {
  let data;
  if (typeof window !== "undefined") {
    data = sessionStorage.getItem("Winner");
  }

  return (
    <div>
      <Head>
        <title>Welcome</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='container'>
        <h1>Score Card</h1>
        <p>Congratulations !!  {data} is Winner</p>
        <Link href='./game'>Play Again</Link>
      </div>
    </div>
  );
};

export default result;
