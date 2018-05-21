const db = require("../db");

//Wrap query in promise to avoid callbacks
module.exports = {
  getTutorInfo({ }) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * From Tutor";
      db.query(query, (error, result, fields) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }
};
