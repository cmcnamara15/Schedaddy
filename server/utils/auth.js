const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
  // function for our authenticated routes
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.query or headers
    let token = req.query.token || req.headers.authorization || req.body.token;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.account = data;
    } catch {
      console.log("Invalid token");
    }

    // send to next endpoint
    return req;
  },
  signToken: function ({ email, _id, firstName, lastName }) {
    const payload = { email, _id, firstName, lastName };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
