const jwt = require("jsonwebtoken");

function signToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      "jwtsecret123#",
      { expiresIn: 3600 },
      function (err, token) {
        if (err) {
          reject(err);
        }
        resolve(token);
      }
    );
  });
}

module.exports.signToken = signToken;
