import React from "react";
import "../css/layout.css";
import Navbar from "./navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
// import ReactDOM from "react-dom";
import disableScroll from "disable-scroll";
import favicon from "../assets/dC.ico";
import Helmet from "react-helmet";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      disableScroll.on();
    }
  };

  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
