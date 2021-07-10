import React from "react";
import styles from "./Middle.module.css";
import { Route } from "react-router-dom";
import CreateATest from "../components/CreateATest";
import TakeATest from "../components/TakeATest";
import ViewStats from "../components/ViewStats";
function Middle() {
  return (
    <div className={`${styles.middlebar} ${styles.gridlayout}`}>
      Middle bar
      <Route path="/createatest">
        <CreateATest />
      </Route>
      <Route path="/takeatest">
        <TakeATest />
      </Route>
      <Route path="/viewstats">
        <ViewStats />
      </Route>
    </div>
  );
}

export default Middle;
