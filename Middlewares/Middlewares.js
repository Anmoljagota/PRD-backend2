const jwt = require("jsonwebtoken");
const middleware = (req, res, next) => {
  const token = req.headers.auth;
  if (token) {
    const decode = jwt.verify(token, "loginornot");
   req.body.userId=decode.UserId
     if (decode) {
      next();
    }
  } else {
    res.send("you are not authorized");
  }
 
};
module.exports = {
  middleware,
};
