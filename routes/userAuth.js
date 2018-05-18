const userAuth = require("../services/userAuth");

// register route
module.exports = app => {
  app.post("/register", (req, res) => {
    userAuth
      .register({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        isTutor: 0
      })
      .then(() => res.sendStatus(200));
  });

  // login route
  app.post("/login", (req, res) => {
    userAuth
      .authenticate({
        username: req.body.username,
        password: req.body.password
      })
      .then(({ success }) => {
        if (success) res.sendStatus(200);
        else res.sendStatus(401);
      });
  });
};
