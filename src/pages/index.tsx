import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/Home";
import DataProvider from "../context/DataProvider";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Codepen Clone | Online Code Editor</title>
        <meta name="description" content="Online Code Editor" />
        <link rel="icon" href="/assets/codepen-favicon.jpg" />
      </Head>

      <DataProvider>
        <main>
          <HomePage />
        </main>
      </DataProvider>
    </>
  );
};

export default Home;
