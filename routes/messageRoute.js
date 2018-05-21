const messages = require("../services/messageService");

module.exports = app => {
  app.get("/api/message/:student_id/:tutor_id", async (req, res) => {
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
