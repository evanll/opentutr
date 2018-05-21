const tutorProfileService = require("../services/tutorProfileService");

module.exports = app => {
  app.get("/api/tutor-profile/:num", async (req, res) => {
    var num = req.params.num;
    if(isFinite(num) && num > 0){
      const result= await tutorProfileService.getTutorInfo({ tutor_id: num });
      res.send(result[0]);
    }
     else{
       res.status(400).send({ message: 'invalid number supplied' });
   }
  });
};
