/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */
 
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
