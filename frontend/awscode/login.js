//code for login route

const glib = require("./googleAuthWrapperLib.js");

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Headers": "Content-Type:application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
  };

  //var bodyStr =  event.body;
  //console.log(typeof bodyStr)
  //console.log(bodyStr)
  const bodyObj = JSON.parse(event.body);
  //console.log(typeof bodyObj)
  //console.log(bodyObj)

  let idToken = bodyObj["tokenid"];
  let email, family_name;
  let loginTicket = await glib
    .getOAUthClient()
    .verifyIdToken({ idToken, audience: glib.getMyClientID() });
  console.log(loginTicket);
  email = loginTicket.payload.email;
  family_name = loginTicket.payload.family_name;
  console.log(`User Verified with Google : ${family_name} - ${email}`);
  const response = {
    statusCode: 200,
    headers: headers,
    body: JSON.stringify(
      `Successfully created user / logged in : ${email} : ${family_name}!`
    ),
  };
  return response;
};
