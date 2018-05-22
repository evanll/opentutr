const express = require("express");
const bodyParser = require("body-parser");
// auth
const cookieSession = require("cookie-session");
const passport = require("passport");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
// session management/ cookie parser
app.use(
  cookieSession({
    keys: ["XVYucHHPtHY9&ukS"],
    maxAge: 6000,
    saveUnitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Authentication endpoint
const userAuthRoutes = require("./routes/userAuth");
userAuthRoutes(app);
//or require("./routes/userAuth")(app)

// Tutor profile endpoint
const tutorProfileRoute = require("./routes/tutorProfileRoute");
tutorProfileRoute(app);

// All tutor search
const allTutorRoute = require("./routes/returnTutorRoute");
allTutorRoute(app);

// messages
const specificMessageRoute = require("./routes/messageRoute");
specificMessageRoute(app);

const tutorInfoRoute = require("./routes/tutorInfoRoute");
tutorInfoRoute(app);

const insertTutorInfoRoute = require("./routes/insertTutorInfoRoute");
insertTutorInfoRoute(app);

// subject search
const subjectRoute = require("./routes/subjectSearchRoute");
subjectRoute(app);

if (process.env.NODE_ENV === "production") {
  // express will send production files if the route is recognized
  app.use(express.static("client/build"));

  // else it will serve the index.html file
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// To get the port from Heroku or 5000 if in dev
const PORT = process.env.PORT || 5000;
app.listen(PORT);
