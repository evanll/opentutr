const messageTutor = require("../services/writeMessageService");


// NEED TO GET MESSAGE SOMEHOW
module.exports = app => {
  app.get("/api/writeMessage/:tutor_id/:student_id", async (req, res) => {
    var tutor = req.params.tutor_id;
    var student = req.params.student_id;

    if(isFinite(tutor) && tutor > 0){
      const result= await messageTutor.sendMessages( {subjectType : 'DROID', student_id : student, tutor_id : tutor} );
      res.send(result);
    }
    else{
      res.status(400).send({ message: 'invalid number supplied' });
    }
    });
};
