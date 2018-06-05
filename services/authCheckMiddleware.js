/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */
 
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
