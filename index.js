const express = require("express");
const bodyParser = require("body-parser");
// auth
const cookieSession = require("cookie-session");
const passport = require("passport");

const app = express();
//app.set('trust proxy', 1);
app.use(express.static("public"));
app.use(bodyParser.json());
// session management/ cookie parser
app.use(
  cookieSession({
    name: "opentutr",
    keys: ["XVYucHHPtHY9&ukS"],
    maxAge: 900 * 60 * 60 * 1000, //24 hours
    saveUnitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get('/.well-known/acme-challenge/9ykeHYoUsHzShICO2zkef8Kg_ILPiCwDXtRQ69qSA7I.Fynu6BpcpR593p8yrZHH2oMn72u2sFVKf1kaIDaSNcs', function(req, res) {
  res.send("9ykeHYoUsHzShICO2zkef8Kg_ILPiCwDXtRQ69qSA7I.Fynu6BpcpR593p8yrZHH2oMn72u2sFVKf1kaIDaSNcs");
});

// Authentication endpoint
const userAuthRoutes = require("./routes/userAuth");
userAuthRoutes(app);
//or require("./routes/userAuth")(app)

// reviews endpoint
const allReviews = require("./routes/readReviewRoute");
allReviews(app);

// write a review
const writeReview = require("./routes/writeReviewRoute");
writeReview(app);

// message tutor
const messageTutor = require("./routes/writeMessageRoute");
messageTutor(app);

// All tutor search
const allTutorRoute = require("./routes/returnAllTutorRoute");
allTutorRoute(app);

// messages
const specificMessageRoute = require("./routes/readMessageRoute");
specificMessageRoute(app);

const tutorInfoRoutes = require("./routes/tutorInfoRoutes");
tutorInfoRoutes(app);

const insertTutorInfoRoute = require("./routes/updateTutorInfoRoute");
insertTutorInfoRoute(app);

// subject search
const subjectRoute = require("./routes/tutorSearchRoutes");
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
