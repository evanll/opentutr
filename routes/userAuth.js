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
        isTutor: req.body.isTutor
      })
      .then(() => res.sendStatus(200));
  });

  // login route
  app.post("/api/login", async (req, res) => {
    try {
      let user = await userAuth.authenticate({
        // check the request body to get data
        username: req.body.username,
        password: req.body.password
      });
      // credentials do not match
      if (user.userId == -1) {
        console.log("Authentication failed.");
        res.sendStatus(401)
      } else {
        // user authenticated, handle session with passportjs
        console.log("User authenticated. UserId: " + user.userId);
        req.login(user.userId, () => res.sendStatus(200));
      }
    } catch(err) {
       res.sendStatus(403)
    }
  });

  // simple api endpoint to confirm that someone is logged in
  // response with current user
  app.get("/api/user", (req, res) => {
    if (req.user) {
      res.json({
        authenticated: true,
        userId: req.user
      });
    } else {
      res.json({
        authenticated: false,
        userId: null
      });
    }
  });

  // simple api endpoint to confirm that someone is logged in
  app.get("/api/logout", (req, res) => {
    // attached by passport to the request
    req.logout();
    // respond with undefined meaning that user is no longer signed
    res.send(req.user);
  });
};
