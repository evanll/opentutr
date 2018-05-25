const express = require("express");
const bodyParser = require("body-parser");
// requirements for Authentication
const cookieSession = require("cookie-session");
const passport = require("passport");
// requirements for https
const https = require("https");
const fs = require("fs");
const forceSSLMiddleware = require("./services/forceSSLMiddleware");

const app = express();

// Force SSL, redirect http to https
if (process.env.NODE_ENV === "production") {
  app.use(forceSSLMiddleware);
}

// Static files
app.use(express.static("public"));
app.use("/api/user-images", express.static("userdata/images"));

app.use(bodyParser.json());

// session management/ cookie parser
app.use(
  cookieSession({
    name: "opentutr",
    keys: ["XVYucHHPtHY9&ukS"],
    maxAge: 900 * 60 * 60 * 1000, // Attension in VM, time issue
    saveUnitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

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

// Production settings for react client
if (process.env.NODE_ENV === "production") {
  // express will send production files if the route is recognized
  app.use(express.static("client/build"));

  // else it will serve the index.html file
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Get the port for production server or 5000 if in dev
const PORT = process.env.PORT || 5000;
app.listen(PORT);

// // Use sudo to start the dev server for ports < 1024
// const options = {
//   key: fs.readFileSync('./etc/openssl/live/opentutr.com/privkey.pem'),
//   cert: fs.readFileSync('./etc/openssl/live/opentutr.com/fullchain.pem')
// };
//
// // listen https standard port
// https.createServer(options, app).listen(443);
