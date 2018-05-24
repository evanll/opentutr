const tutorInfo = require("../services/tutorInfoService");

module.exports = app => {
  app.get("/api/tutor/:tutorId", async (req, res) => {
    var tutorId = req.params.tutorId;
    if(tutorId>0 && isFinite(tutorId)){
      const result= await tutorInfo.getTutorInfo(tutorId);
      res.send(result);
    }
    else{
      res.status(400).send({ message: 'invalid number supplied' });
    }
    });
};
