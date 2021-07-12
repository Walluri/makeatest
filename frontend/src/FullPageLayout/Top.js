import React from "react";
import styles from "./Top.module.css";
import RouteLink from "../routes/RouteLink";

function Top() {
  return (
    <div
      className={`${styles.topbar} ${styles.gridlayout} ${styles.flexContainer}`}
    >
      <RouteLink />
    </div>
  );
}

export default Top;
