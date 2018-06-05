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
  getReviews( {tutor_id} ) {
    return new Promise((resolve, reject) => {
      const query = "SELECT STR.rating, U.username FROM Review AS STR JOIN Student AS S ON S.student_id = STR.student_id JOIN User AS U ON S.user_id = u.user_id WHERE tutor_id = ?";
      db.query(query, [tutor_id], (error, result, fields) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }
};


// Null right now
// SELECT U.username, T.firstname, SRT.reviewRanking, Sub.subject FROM studentreviewtutor AS SRT JOIN student AS S ON SRT.student_id = S.student_id JOIN User AS U ON U.user_id = S.user_id JOIN Tutor AS T ON SRT.tutor_id = T.tutor_id JOIN tutorsubject AS TS ON T.tutor_id = TS.tutor_id JOIN Subject AS Sub ON TS.subject_id = Sub.subject_id WHERE tutor_id = 32

// Null right now
// SELECT  U.username, SRT.reviewRanking FROM studentreviewtutor AS SRT JOIN student AS S ON SRT.student_id = S.student_id JOIN User AS U ON U.user_id = S.user_id JOIN Tutor AS T ON SRT.tutor_id = T.tutor_id JOIN tutorsubject AS TS ON T.tutor_id = TS.tutor_id JOIN Subject AS Sub ON TS.subject_id = Sub.subject_id WHERE SRT.tutor_id = 32;

// These are the students
// SELECT U.username FROM student AS S JOIN User AS U ON S.user_id = U.user_id;

// These are the reviews
// SELECT STR.reviewRanking, U.username FROM studentreviewtutor AS STR JOIN Student AS S ON S.student_id = STR.student_id JOIN User AS U ON S.user_id = u.user_id WHERE tutor_id = 32;
