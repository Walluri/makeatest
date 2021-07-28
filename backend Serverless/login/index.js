const glib = require("./login-helper.js");
const { signToken } = require("./jwt-helper.js");

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
    // 1 - await over : create user in database.
    // 2 - send an appropriate token back to client
    let token = await signToken({ email });
    const response = {
      statusCode: 200,
      headers,
      body: JSON.stringify({ token }),
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
