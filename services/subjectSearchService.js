const db = require("../db");

//Wrap query in promise to avoid callbacks
module.exports = {
  getSubjects({ subjectType }) {
    return new Promise((resolve, reject) => {
      const query = "SELECT S.subjectType, T.price, U.firstname, U.lastname FROM Subject AS S JOIN tutorsubject AS ts ON S.subject_id = ts.subject_id JOIN Tutor AS T ON T.tutor_id = ts.tutor_id JOIN User AS U ON T.user_id = U.user_id WHERE subjectType = ? ORDER BY T.price";
      db.query(query, [subjectType],(error, result, fields) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }
};
