const tutorProfileService = require("../services/tutorProfileService");

module.exports = app => {
  app.get("/api/tutor-profile", async (req, res) => {
      const result= await tutorProfileService.getTutorInfo({ tutor_id: 2 });
      res.send(result);
    });
};
