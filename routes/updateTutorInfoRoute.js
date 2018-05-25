const insertTutorInfo = require("../services/updateTutorInfoServices");


// Need to get user_id .... maybe from cookie? ....
// Need to get description .... maybe from eventListening/handler ....
module.exports = app => {
  app.get("/api/insertInfo/:tutor_id", async (req, res) => {
    var tutor = req.params.tutor_id;
    if(isFinite(tutor) && tutor > 0){
      const result= await insertTutorInfo.getMessages( {description : 'Boo JS', tutor_id : 162} );   // This can be expanded as appropriate
      res.send(result);
    }
    else{
      res.status(400).send({ message: 'invalid number supplied' });
    }
    });
};
