const { OAuth2Client } = require("google-auth-library");

function getMyClientID() {
  return "393444161581-894hbv0oho8avp5nml2h4t4nhk6jddkf.apps.googleusercontent.com";
}

function getOAuth2ClientFromClientID(clientID) {
  return new OAuth2Client(clientID);
}

function getOAUthClient() {
  return getOAuth2ClientFromClientID(getMyClientID());
}

exports.getOAuth2ClientFromClientID = getOAuth2ClientFromClientID;
exports.getMyClientID = getMyClientID;
exports.getOAUthClient = getOAUthClient;
