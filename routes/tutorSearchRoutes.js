const searchSubject = require("../services/tutorSearchService");

module.exports = app => {
  app.get("/api/tutors/", async (req, res) => {
    var result = "";
    if (req.query.filter === "subject") {
      if (req.query.subjectid > 0) {
        result = await searchSubject.getTutorsBySubject(req.query.subjectid);
      } else {
        return res.send("");
      }
    } else {
      result = await searchSubject.getAllTutors();
    }

    res.send(result);
  });
};
