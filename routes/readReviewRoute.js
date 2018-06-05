/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */
 
const specificReviews = require("../services/readReviewService");

module.exports = app => {
  app.get("/api/allReview/:tutor_id", async (req, res) => {
    var tutor = req.params.tutor_id;
    if(isFinite(tutor) && tutor > 0){
      const result= await specificReviews.getReviews( {tutor_id : tutor} );
      res.send(result);
    }
    else{
      res.status(400).send({ message: 'invalid number supplied' });
    }
    });
};
