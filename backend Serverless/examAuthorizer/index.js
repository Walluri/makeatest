const jwt = require("jsonwebtoken");

exports.handler = async (event) => {
  console.log(event);
  //1 Extract the authorization token
  let token = event["authorizationToken"];

  //2 Extract the email information from the token
  let { email } = jwt.verify(token, "jwtsecret123#");
  //{ email: 'prakash4455@gmail.com', iat: 1627446439, exp: 1627450039 }

  //3 verify is user is in database and create a permission accordingly
  let permission = "Deny";
  permission =
    email === "prakash4455@gmail.com" || email === "portfoliookati@gmail.com"
      ? "Allow"
      : "Deny";

  //4 Create a policy document programatically based on the event object
  const policyDocumentToReturn = {
    principalId: email,
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Resource: "*",
          Effect: permission,
        },
      ],
      //{apiId}/{stage}/{httpVerb}/[{resource}/[{child-resources}]]
    },
    //     context: {
    //     customKey: 'valluri',
    //   },
  };
  console.log(policyDocumentToReturn);
  return policyDocumentToReturn;
};
