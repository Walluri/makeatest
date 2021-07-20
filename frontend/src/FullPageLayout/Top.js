import React from "react";
import styles from "./Top.module.css";
import RouteLink from "../routes/RouteLink";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

function Top() {
  function responseSuccessGoogle(response) {
    const loginObject = {
      url: "https://u5s616jrhd.execute-api.ap-south-1.amazonaws.com/prod/login",
      method: "post",
      data: {
        tokenid: response.tokenId,
      },
      //params: { paramkey: "paramvalue" },
      // headers: {
      //   headerkey: "header value",
      // },
    };
    axios(loginObject)
      .then((response) => {
        console.log("then");
        console.log(response);
      })
      .catch((failure) => {
        console.log("catch");
        console.log(failure);
      });
  }

  function responseFailureGoogle(failure) {
    console.log(failure);
  }

  return (
    <div
      className={`${styles.topbar} ${styles.gridlayout} ${styles.flexContainer}`}
    >
      <RouteLink />
      <GoogleLogin
        clientId="393444161581-894hbv0oho8avp5nml2h4t4nhk6jddkf.apps.googleusercontent.com"
        buttonText="Login With Google"
        onSuccess={responseSuccessGoogle}
        onFailure={responseFailureGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Top;
