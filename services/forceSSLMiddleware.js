/**
 * Force https on production server
 * According to cloud provider requirements
 */
module.exports = function(req, res, next) {
  if (req.headers["x-forwarded-proto"] != "https") {
    res.redirect(status, "https://" + req.hostname + req.originalUrl);
  } else {
    next();
  }
};
