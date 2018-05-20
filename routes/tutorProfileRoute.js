const tutorProfileService = require("../services/tutorProfileService");

// register route
module.exports = app => {
  app.get("/tutor-profile", (req, res) => {
    tutorProfileService
      .getTutorInfo({
        id: 2
      })
      .then(() => res.sendStatus(200));
  });
};
