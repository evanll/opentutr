const db = require("../db");

//Wrap query in promise to avoid callbacks
module.exports = {
  getMessages( {subject_id, tutor_id} ) {
    return new Promise((resolve, reject) => {
      const query = "SELECT subjectType FROM studentmessagetutor WHERE student_id = ? && tutor_id= ?";
      db.query(query, [subject_id, tutor_id], (error, result, fields) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }
};
