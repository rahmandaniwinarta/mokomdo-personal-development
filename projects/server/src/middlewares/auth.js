const jwt = require("jsonwebtoken");

module.exports = {
  checkRole: (req, res, next) => {
    if (req.user.isAdmin) return next();
    res.status(400).send("lo bukan admin");
  },
};
