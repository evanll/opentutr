const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//authentication
const store = require("./store");
app.use(express.static("public"));
app.use(bodyParser.json());

// register route
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
//authentication

// To get the port from Heroku or 5000 if in dev
const PORT = process.env.PORT || 5000;
app.listen(PORT);
