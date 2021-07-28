exports.handler = async (event) => {
  console.log(event);
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    },
    body: JSON.stringify({
      route: "get Exams",
      email: event.requestContext.authorizer.principalId,
    }),
  };
  return response;
};
