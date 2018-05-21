const tutorInfo = require("../services/tutorInfoService");

module.exports = app => {
  app.get("/api/all-tutor-info", async (req, res) => {
      const result= await tutorInfo.getTutorInfo({ tutor_id : 2});
      res.send(result);
    });
};
