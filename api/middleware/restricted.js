const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  next();
  /*
    * IMPLEMENT

    - On valid token in the Authorization header, call next.
    - On missing token in the Authorization header, the response body should include a string exactly as follows: "token required".
    - On invalid or expired token in the Authorization header, the response body should include a string exactly as follows: "token invalid".
  */
};
