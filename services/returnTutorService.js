const db = require("../db");

//Wrap query in promise to avoid callbacks
module.exports = {
  getTutorInfo({ tutor_id }) {
    return new Promise((resolve, reject) => {
      const query = "SELECT U.firstname, U.lastname, S.subjectType, T.description From Tutor AS T JOIN tutorsubject AS TS ON TS.tutor_id = T.tutor_id JOIN Subject AS S ON S.subject_id = TS.subject_id JOIN User AS U ON T.user_id = U.user_id";
      db.query(query, (error, result, fields) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }
};
