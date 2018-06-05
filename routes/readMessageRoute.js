/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */
 
const messages = require("../services/readMessageService");

module.exports = app => {
  app.get("/api/readMessage/:student_id/:tutor_id", async (req, res) => {
    var student = req.params.student_id;
    var tutor = req.params.tutor_id;
    if(isFinite(tutor) && tutor>0 && student>0 && isFinite(student)){
      const result= await messages.getMessages( {student_id : student, tutor_id : tutor} );
      res.send(result);
    }
    else{
      res.status(400).send({ message: 'invalid number supplied' });
    }
    });
};
