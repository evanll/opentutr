const findALlTutor = require("../services/returnAllTutorService");

module.exports = app => {
  app.get("/api/all-tutor", async (req, res) => {
      const result= await findALlTutor.getTutorInfo({  });
      res.send(result);
    });
};
