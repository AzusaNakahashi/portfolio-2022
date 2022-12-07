import Header from "../components/Header";
import Footer from "../components/Footer";
import { FC, useEffect } from "react";
import { useRouter } from "next/router";

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
