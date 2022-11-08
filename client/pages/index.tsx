import type { FC } from "react";
import Layout from "../layout/Layout";
import type { NextPageWithLayout } from "./_app";
import Top from "../components/Top";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home: FC = () => {
  return (
    <>
      <Top />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

(Home as NextPageWithLayout).layout = Layout;

export default Home;
