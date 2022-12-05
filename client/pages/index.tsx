import type { ReactElement } from "react";
import Layout from "../layout/Layout";
import type { NextPageWithLayout } from "./../types/layoutType";
import IndexHero from "../components/home/IndexHero";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <IndexHero />
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
