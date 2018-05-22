const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

// Authentication endpoint
const userAuthRoutes = require("./routes/userAuth");
userAuthRoutes(app);
//or require("./routes/userAuth")(app)
//authentication

// Tutor profile endpoint
const tutorProfileRoute = require("./routes/tutorProfileRoute");
tutorProfileRoute(app);

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

const tutorInfoRoute = require("./routes/tutorInfoRoute");
tutorInfoRoute(app);

const insertTutorInfoRoute = require("./routes/updateTutorInfoRoute");
insertTutorInfoRoute(app);

// subject search
const subjectRoute = require("./routes/subjectTutorSearchRoute");
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
