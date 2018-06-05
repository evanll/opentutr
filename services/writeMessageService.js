/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */
 
const db = require("../db");

module.exports = {
  sendMessages( {subjectType, student_id, tutor_id} ) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO Message (message, student_id, tutor_id) VALUES (?, ?, ?)";
      db.query(query, [subjectType, student_id, tutor_id], (error, result, fields) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }
};

// UPDATE (User) SET firstname = ? WHERE User.user_id = 2
//
// INSERT INTO studentmessagetutor (subjectType, student_id, tutor_id) VALUES (?, ?, ?);
//
// INSERT INTO studentmessagetutor (subjectType, student_id, tutor_id) VALUES ('hello', '12', '32');
