const db = require("../db");

//Wrap query in promise to avoid callbacks
module.exports = {
  getMessages( {student_id, tutor_id} ) {
    return new Promise((resolve, reject) => {
      const query = "SELECT U.firstname, U.lastname, SMT.subjectType FROM studentmessagetutor AS SMT JOIN Tutor AS T ON T.tutor_id = SMT.tutor_id JOIN User AS U ON U.user_id = T.user_id WHERE SMT.student_id = ? && SMT.tutor_id = ?";
      db.query(query, [student_id, tutor_id], (error, result, fields) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }
};

// SELECT U.firstname, U.lastname, SMT.subjectType FROM studentmessagetutor AS SMT JOIN Tutor AS T ON T.tutor_id = SMT.tutor_id JOIN User AS U ON U.user_id = T.user_id WHERE SMT.student_id = 12 && SMT.tutor_id = 32;
