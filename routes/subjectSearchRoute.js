const searchSubject = require("../services/subjectSearchService");

module.exports = app => {
  app.get("/api/all-subjects/:subject_id", async (req, res) => {
    var subject = req.params.subject_id;
    console.log(subject);
    if(subject>0 && isFinite(subject)){
      const result= await searchSubject.getSubjects({ subject_id: subject });
      res.send(result);
    }
    else{
      res.status(400).send({ message: 'invalid number supplied' });
    }
    });
};
