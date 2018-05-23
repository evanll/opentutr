// next is used when the middleware is netx
// to pass to the next middleware in the chain
// wire it to routes, after the route parameter
// app.post get an arbitary number of middlewares
module.exports = (req, res, next) => {
  // check if passport has attached a user
  if (!req.user) {
    // return immediately without next, the request needs not to be
    // processed further
    return res.sendStatus(401);
  }

  next();
};
