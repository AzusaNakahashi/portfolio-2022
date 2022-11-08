import Header from "../components/Header";
import Footer from "../components/Footer";
import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content-wrapper">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
