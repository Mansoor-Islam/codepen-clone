import Header from "./Header";
import Code from "./code-components/Code";
import Result from "./code-components/Result";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <Code />
      <Result />
    </>
  );
};

export default HomePage;
