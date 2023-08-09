import React from "react";
import Logo from "./Logo";
import Tabs from "./Tabs";
import Bottom from "./Bottom";
import Socials from "./Socials";

export default function App() {
  return (
    <>
      <div className="total-content">
        <div className="top-content">
          <Logo />
          <Tabs />
        </div>
        <div className="bottom-container">
          <Bottom />
        </div>
      </div>
      <Socials />
    </>
  );
}
