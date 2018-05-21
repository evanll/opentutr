const searchSubject = require("../services/subjectSearchService");

module.exports = app => {
  app.get("/api/all-subjects", async (req, res) => {
      const result= await searchSubject.getSubjects({ subjectType: 'History' });
      res.send(result);
    });
};
