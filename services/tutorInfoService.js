const db = require("../db");

//Wrap query in promise to avoid callbacks
module.exports = {
  getTutorInfo({ tutor_id }) {
    return new Promise((resolve, reject) => {
      const query = "SELECT (SELECT COUNT(rating) FROM Review WHERE tutor_id = ?) AS reviewNum, (SELECT AVG(rating) FROM Review WHERE tutor_id = ?) AS average, U.firstname, U.lastname, S.name, T.description, T.rate From Tutor AS T JOIN TutorSubject AS TS ON TS.tutor_id = T.tutor_id JOIN Subject AS S ON S.subject_id = TS.subject_id JOIN User AS U ON T.user_id = U.user_id WHERE T.tutor_id = ?";
      db.query(query, [tutor_id, tutor_id, tutor_id], (error, result, fields) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }
};
