const store = require("../services/userAuth");

// register route
module.exports = app => {
  app.post("/register", (req, res) => {
    store
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
    store
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
