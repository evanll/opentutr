/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */

DROP TABLE IF EXISTS Message;
DROP TABLE IF EXISTS Review;
DROP TABLE IF EXISTS TutorSubject;
DROP TABLE IF EXISTS StudentSubject;
DROP TABLE IF EXISTS Subject;
DROP TABLE IF EXISTS Tutor;
DROP TABLE IF EXISTS Student;
DROP TABLE IF EXISTS User;

CREATE TABLE User (
  user_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL UNIQUE,
  username VARCHAR(20) NOT NULL UNIQUE,
  password_salt VARCHAR(20) NOT NULL,
  password_hash VARCHAR(150) NOT NULL,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  isTutor BOOLEAN NOT NULL DEFAULT '0'
);

CREATE TABLE Tutor (
  tutor_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER,
  description VARCHAR(2000),
  rate DOUBLE,
  location VARCHAR(80),
  FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Student (
  student_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER NOT NULL,
  stage VARCHAR(100),
  FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Subject (
  subject_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE TutorSubject (
  subject_id INTEGER NOT NULL,
  tutor_id INTEGER NOT NULL,
  FOREIGN KEY (subject_id) REFERENCES Subject(subject_id),
  FOREIGN KEY (tutor_id) REFERENCES Tutor(tutor_id),
  PRIMARY KEY (subject_id, tutor_id)
);

CREATE TABLE Review (
  review_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  student_id INTEGER NOT NULL,
  tutor_id INTEGER NOT NULL,
  rating INTEGER NOT NULL,
  comments VARCHAR(1000),
  posted_at TIMESTAMP NOT NULL,
  CHECK (reviewRanking>=0 && reviewRanking<=5),
  FOREIGN KEY (student_id) REFERENCES Student(student_id),
  FOREIGN KEY (tutor_id) REFERENCES Tutor(tutor_id)
);

CREATE TABLE Message (
  message_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  student_id INTEGER NOT NULL,
  tutor_id INTEGER NOT NULL,
  message VARCHAR(1000) NOT NULL,
  posted_at TIMESTAMP NOT NULL,
  FOREIGN KEY (student_id) REFERENCES Student(student_id),
  FOREIGN KEY (tutor_id) REFERENCES Tutor(tutor_id)
);
