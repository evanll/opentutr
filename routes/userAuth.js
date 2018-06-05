/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */
 
const userAuth = require("../services/userAuth");

// register route
module.exports = app => {
  app.post("/api/register", async (req, res) => {
    try {
      const userId = await userAuth.register({
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          isTutor: req.body.isTutor
        });
      // instant login
      req.login(userId, () => res.sendStatus(200));
    } catch(err) {
      console.log(err);
    }
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
    // redirect user after logout
    res.redirect("/");
  });
};
