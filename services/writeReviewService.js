const db = require("../db");

//  Need to prevent the option of the same student repeatedly reviewing one tutor
module.exports = {
  review( {reviewRanking, student_id, tutor_id} ) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO Review (rating, student_id, tutor_id) VALUES (?, ?, ?)";
      db.query(query, [reviewRanking, student_id, tutor_id], (error, result, fields) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }
};


// Insert review
// INSERT INTO studentreviewtutor (reviewRanking, student_id, tutor_id) VALUES ('2', '22', '12');  ";
