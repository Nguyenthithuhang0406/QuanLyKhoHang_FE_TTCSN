import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="layout-h">
        <Header />
      </div>
      <div className="layout-n">
        <NavBar />
      </div>
      <main className="layout-m">{children}</main>
    </div>
  );
};

export default Layout;
