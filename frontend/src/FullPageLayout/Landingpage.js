import React from "react";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";

import landingpagestyle from "./Landingpage.module.css";

function Landingpage() {
  return (
    <div
      className={`${landingpagestyle.mainpage} ${landingpagestyle.gridlayout}`}
    >
      <Top></Top>
      <Middle></Middle>
      <Bottom></Bottom>
    </div>
  );
}

export default Landingpage;
//    <div className={`${landingpagestyle.mainpage} ${"flex-container"}`}>
