/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */
 
const db = require("../db");

//Wrap query in promise to avoid callbacks
module.exports = {
  getTutorInfo({ tutor_id }) {
    return new Promise((resolve, reject) => {
      const query = "SELECT T.tutor_id, U.firstname, U.lastname, S.name, T.description, T.rate From Tutor AS T JOIN TutorSubject AS TS ON TS.tutor_id = T.tutor_id JOIN Subject AS S ON S.subject_id = TS.subject_id JOIN User AS U ON T.user_id = U.user_id";
      db.query(query, (error, result, fields) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }
};
