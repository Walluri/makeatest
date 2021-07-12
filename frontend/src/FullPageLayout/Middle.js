import React from "react";
import styles from "./Middle.module.css";
import RouteActions from "../routes/RouteActions";
function Middle() {
  return (
    <div className={`${styles.middlebar} ${styles.gridlayout}`}>
      Middle bar
      <RouteActions />
    </div>
  );
}

export default Middle;
