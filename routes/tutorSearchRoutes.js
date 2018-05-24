const searchSubject = require("../services/tutorSearchService");

module.exports = app => {
  app.get("/api/tutors/:subject_id", async (req, res) => {
    var subjectId = req.params.subject_id;
    if(subjectId > 0 && isFinite(subjectId)){
      const result= await searchSubject.getTutorsBySubject(subjectId);
      res.send(result);
    }
    else{
      res.status(400).send({ message: 'Invalid subject id' });
    }
    });
};
