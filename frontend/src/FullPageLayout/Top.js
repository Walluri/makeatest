import React from "react";
import styles from "./Top.module.css";
import RouteLink from "../routes/RouteLink";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

function Top() {
  return (
    <div
      className={`${styles.topbar} ${styles.gridlayout} ${styles.flexContainer}`}
    >
      <RouteLink />
      <GoogleLogin
        clientId="393444161581-894hbv0oho8avp5nml2h4t4nhk6jddkf.apps.googleusercontent.com"
        buttonText="Login With Google"
        // onSuccess={responseSuccessGoogle}
        // onFailure={responseFailureGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Top;
