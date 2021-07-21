const glib = require("./googleAuthWrapperLib.js");

const headers = {
  "Access-Control-Allow-Headers": "Content-Type:application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
};

exports.handler = async (event) => {
  const bodyObj = JSON.parse(event.body);
  let idToken = bodyObj["tokenid"];
  try {
    let loginTicket = await glib
      .getOAUthClient()
      .verifyIdToken({ idToken, audience: glib.getMyClientID() });
    let { email, family_name } = loginTicket.payload;
    const response = {
      statusCode: 200,
      headers,
      body: JSON.stringify({ email, family_name }),
    };
    return response;
  } catch (err) {
    return {
      statusCode: 501,
      headers,
      body: JSON.stringify(`Internal Error Occured`),
    };
  }
};
