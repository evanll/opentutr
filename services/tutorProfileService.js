const db = require("../db");


// I would scrap this class and use tutorinfo service for both
module.exports = {
  getTutorInfo({ tutor_id }) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * From Tutor WHERE tutor_id = ?";
      db.query(query, [tutor_id], (error, result, fields) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }
};
