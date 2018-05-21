const messages = require("../services/messageService");

module.exports = app => {
  app.get("/api/message", async (req, res) => {
      const result= await messages.getMessages( {subject_id : 12, tutor_id : 22} );
      res.send(result);
    });
};
