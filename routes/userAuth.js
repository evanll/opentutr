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
    userAuth.authenticate({
      // check the request body to get data
      username: req.body.username,
      password: req.body.password
    })
    .then((result) => {
      req.session.views = 1; //remove
      if (result.success) {
        // res.sendStatus(200);
        console.log(result.user_id);
        // passport login
        req.login(result.user_id, () => res.redirect("/"));
      } else {
        res.sendStatus(401);
      }
    })
    .catch((error) => console.log(error));
  });

  // simple api endpoint to confirm that someone is logged in
  // response with current user
  app.get("/api/user", (req, res) => {
    res.send(req.user);
  });

  // simple api endpoint to confirm that someone is logged in
  app.get("/api/logout", (req, res) => {
    // attached by passport to the request
    req.logout();
    // respond with undefined meaning that user is no longer signed
    res.send(req.user);
  });
};
