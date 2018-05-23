const userAuth = require("../services/userAuth");

// register route
module.exports = app => {
  app.post("/api/register", (req, res) => {
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
  app.post("/api/login", (req, res) => {
    userAuth.authenticate({
      // check the request body to get data
      username: req.body.username,
      password: req.body.password
    })
    .then((result) => {
      if (result.success) {
        console.log(result.user_id);
        // passport login
        req.login(result.user_id, () => res.sendStatus(200));
      } else {
        res.sendStatus(401);
      }
    })
    .catch((error) => console.log(error));
  });

  // simple api endpoint to confirm that someone is logged in
  // response with current user
  app.get("/api/user", (req, res) => {
    console.log(req.user);
    res.json({user_id: req.user});
  });

  // simple api endpoint to confirm that someone is logged in
  app.get("/api/logout", (req, res) => {
    // attached by passport to the request
    req.logout();
    // respond with undefined meaning that user is no longer signed
    res.send(req.user);
  });
};
