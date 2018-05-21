const tutorInfo = require("../services/tutorInfoService");

module.exports = app => {
  app.get("/api/all-tutor-info/:tutor_id", async (req, res) => {
    var tutor = req.params.tutor_id;
    if(tutor>0 && isFinite(tutor)){
      const result= await tutorInfo.getTutorInfo({ tutor_id : tutor});
      res.send(result);
    }
    else{
      res.status(400).send({ message: 'invalid number supplied' });
    }
    });
};
