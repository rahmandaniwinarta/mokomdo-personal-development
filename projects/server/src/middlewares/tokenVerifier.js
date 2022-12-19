const jwt = require("jsonwebtoken");

module.exports = {
  verifyToken: (req, res, next) => {
    try {
      let token = req.headers.authorization; //cara nerima bearer token

      if (!token) throw "your token is empty dumbass";

      token = token.split(" ")[1]; //untuk nge remove Bearer dari string

      if (token === "null" || !token) throw "Unauthorized Request";

      let verifiedUser = jwt.verify(token, "z1x2c3v4b5");

      if (!verifiedUser) throw "Verify token failed";

      req.user = verifiedUser; //syntax bikin property dalam object

      next();
    } catch (err) {
      res.status(401).send("Unauthorized Request");
    }
  },
};
