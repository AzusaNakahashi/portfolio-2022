import type { NextPage } from "next";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Top from "../components/Top";

const Home: NextPage = () => {
  return (
    <div className="content-wrapper">
      <Header />
      <main>
        <Top />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
