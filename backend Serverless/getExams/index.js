exports.handler = async (event) => {
  // use optional chaining ?.
  let principalId = event?.requestContext?.authorizer?.principalId;

  // use nullish coalescing operator
  let email = principalId ?? "prakash4455@gmail.com";
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    },
    body: JSON.stringify({
      route: "get Exams",
      email,
    }),
  };
  return response;
};
