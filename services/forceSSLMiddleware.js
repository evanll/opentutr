/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */
 
/**
 * Force https on production server
 * According to cloud provider requirements
 */
module.exports = function(req, res, next) {
  if (req.headers["x-forwarded-proto"] != "https") {
    res.redirect("https://" + req.hostname + req.originalUrl);
  } else {
    next();
  }
};
