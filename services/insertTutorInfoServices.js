const db = require("../db");

//Wrap query in promise to avoid callbacks
module.exports = {
  getMessages( {firstname} ) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE (User) SET firstname = ? WHERE User.user_id = 2";
      db.query(query, [firstname], (error, result, fields) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }
};


// UPDATE (User) SET firstname = 'Did it' WHERE User.user_id = 2;
