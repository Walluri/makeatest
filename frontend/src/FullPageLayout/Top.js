import React from "react";
import styles from "./Top.module.css";
import RouteLink from "../routes/RouteLink";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

function Top() {
  async function responseSuccessGoogle(response) {
    const loginObject = {
      url: "https://p83ga8gy65.execute-api.ap-south-1.amazonaws.com/Prod/login",
      method: "post",
      data: {
        ////what ever you send as part of data will be in the body in the backend
        tokenid: response.tokenId,
      },
      //params: { paramkey: "paramvalue" },
      // headers: {
      //   headerkey: "header value",
      // },
    };
    let res = await axios(loginObject);
    console.log(res);

    const userObject = {
      url: "https://p83ga8gy65.execute-api.ap-south-1.amazonaws.com/Prod/exams",
      method: "get",
      headers: {
        "x-auth-token": res.data.token,
      },
    };
    let res2 = await axios(userObject);
    console.log(res2);
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((failure) => {
    //   console.log(failure);
    // });
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
