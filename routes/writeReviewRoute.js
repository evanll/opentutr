const reviewTutor = require("../services/writeReviewService");


// NEED TO GET rev SOMEHOW
module.exports = app => {
  app.get("/api/writeReview/:tutor_id/:student_id", async (req, res) => {
    var tutor = req.params.tutor_id;
    var student = req.params.student_id;

    if(isFinite(tutor) && tutor > 0){
      const result= await reviewTutor.review( {reviewRanking : 5, student_id : student, tutor_id : tutor} );
      res.send(result);
    }
    else{
      res.status(400).send({ message: 'invalid number supplied' });
    }
    });
};
