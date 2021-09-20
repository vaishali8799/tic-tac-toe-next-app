import Link from "next/link";
import Head from "next/head";
const index = () => {
  return (
    <div>
      <Head>
        <title>Welcome</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className="container">
      <h1>Hello! Lets play the game!</h1>
        <Link href='/game'>Start Game</Link>
        </div>
    </div>
  );
};

export default index;
