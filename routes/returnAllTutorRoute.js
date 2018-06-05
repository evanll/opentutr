/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */
 
const findALlTutor = require("../services/returnAllTutorService");

module.exports = app => {
  app.get("/api/all-tutor", async (req, res) => {
      const result= await findALlTutor.getTutorInfo({  });
      res.send(result);
    });
};
