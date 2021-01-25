import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./../styles/style.scss";

const Layout = ({ isHomepage, children, navigation }) => (
  <>
    <Header isHomepage={isHomepage} navigation={navigation} />
    <div className="flex">
      <div className="flex column">sidebar</div>
      <div>{children}</div>
    </div>
    <Footer />
  </>
);

export default Layout;
