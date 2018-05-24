/**
  * Force https on production server
  * According to cloud provider requirements
  */
module.exports = function(environments, status) {
  environments = environments || ['production'];
  status = status || 302;
  return function(req, res, next) {
    if (environments.indexOf(process.env.NODE_ENV) >= 0) {
      if (req.headers['x-forwarded-proto'] != 'https') {
        res.redirect(status, 'https://' + req.hostname + req.originalUrl);
      }
      else {
        next();
      }
    }
    else {
      next();
    }
  };
};
