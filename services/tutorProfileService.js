const db = require("../db");

//auth
module.exports = {
  getTutorInfo({ tutor_id }) {
    db.query (
      "SELECT * From Tutor WHERE tutor_id = ?",
      [tutor_id],
      function(error, result, fields) {
        if (error) throw error;
        console.log(result[0]);
      }
    );
  }
};
