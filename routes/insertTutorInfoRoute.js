const insertTutorInfo = require("../services/insertTutorInfoServices");

module.exports = app => {
  app.get("/api/insertInfo/:tutor_id", async (req, res) => {
    var tutor = req.params.tutor_id;
    if(isFinite(tutor) && tutor > 0){
      const result= await insertTutorInfo.getMessages( {firstname : 'DROID'} );
      res.send(result);
    }
    else{
      res.status(400).send({ message: 'invalid number supplied' });
    }
    });
};
