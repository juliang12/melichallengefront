import React from "react";
import s from "./Layout.module.scss";
import Header from "../common/header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className={s.container}>{children}</main>
    </>
  );
};

export default Layout;
