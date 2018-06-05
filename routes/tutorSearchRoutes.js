/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */
 
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
