/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */
 
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
