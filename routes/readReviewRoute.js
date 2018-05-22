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
