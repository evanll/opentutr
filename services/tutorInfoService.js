const db = require("../db");

//Wrap query in promise to avoid callbacks
module.exports = {
  getTutorInfo({ tutor_id }) {
    return new Promise((resolve, reject) => {
      const query = "SELECT (SELECT COUNT(reviewRanking) FROM studentreviewtutor WHERE tutor_id = ?) AS reviewNum, (SELECT AVG(reviewRanking) FROM studentreviewtutor WHERE tutor_id = ?) AS average, U.firstname, U.lastname, S.subjectType, T.description, T.price From Tutor AS T JOIN tutorsubject AS TS ON TS.tutor_id = T.tutor_id JOIN Subject AS S ON S.subject_id = TS.subject_id JOIN User AS U ON T.user_id = U.user_id WHERE T.tutor_id = ?";
      db.query(query, [tutor_id, tutor_id, tutor_id], (error, result, fields) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }
};
