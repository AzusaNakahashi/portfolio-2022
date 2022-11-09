import type { ReactElement } from "react";
import Layout from "../layout/Layout";
import type { NextPageWithLayout } from "./../types/layoutType";
import Top from "../components/Top";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Top />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
