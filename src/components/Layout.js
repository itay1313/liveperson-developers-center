import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "./../styles/main.scss";

const Layout = ({ isHomepage, children, navigation }) => (
  <>
    <Header isHomepage={isHomepage} navigation={navigation} />
    <div className="flex dev-body">
      <div className="sidebar flex column">
        <div className="dev-sticky sticky flex column">
          {/* Need to replace */}
          <Sidebar />
        </div>
      </div>
      <div className="dev-content">{children}</div>
    </div>
    <Footer />
  </>
);

export default Layout;
