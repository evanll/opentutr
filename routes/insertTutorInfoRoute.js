const insertTutorInfo = require("../services/insertTutorInfoServices");

module.exports = app => {
  app.get("/api/insertInfo", async (req, res) => {
      const result= await insertTutorInfo.getMessages( {firstname : 'DROID'} );
      res.send(result);
    });
};
