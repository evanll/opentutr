const db = require("../db");

//Wrap query in promise to avoid callbacks
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
