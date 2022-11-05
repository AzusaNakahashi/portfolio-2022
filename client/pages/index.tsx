import type { NextPage } from "next";
import Header from "../components/Header";
import Top from "../components/Top";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
      <Footer />
    </div>
  );
};

export default Home;
