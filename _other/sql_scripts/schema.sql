DROP TABLE IF EXISTS studentmessagetutor;
DROP TABLE IF EXISTS studentReviewTutor;
DROP TABLE IF EXISTS TutorSubject;
DROP TABLE IF EXISTS StudentSubject;
DROP TABLE IF EXISTS Subject;
DROP TABLE IF EXISTS tutor;
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS user;


CREATE TABLE User (
  user_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL UNIQUE,
  username VARCHAR(20) NOT NULL UNIQUE,
  password_salt VARCHAR(20) NOT NULL,
  password_hash VARCHAR(150) NOT NULL,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL
);

CREATE TABLE Student (
  student_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Tutor (
  tutor_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER,
  price Integer NOT NULL,
  description VARCHAR(1000),
  FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Subject (
  subject_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  subjectType VARCHAR(100) NOT NULL UNIQUE
);


CREATE TABLE TutorSubject (
  subject_id INTEGER,
  tutor_id INTEGER,
  FOREIGN KEY (subject_id) REFERENCES Subject(subject_id),
  FOREIGN KEY (tutor_id) REFERENCES Tutor(tutor_id),
  PRIMARY KEY (subject_id, tutor_id)
);


CREATE TABLE StudentReviewTutor (
  student_id INTEGER,
  tutor_id INTEGER,
  reviewRanking INTEGER,
  CHECK (reviewRanking>=0 && reviewRanking<=5),
  FOREIGN KEY (student_id) REFERENCES Student(student_id),
  FOREIGN KEY (tutor_id) REFERENCES Tutor(tutor_id),
  PRIMARY KEY (student_id, tutor_id)
);

CREATE TABLE StudentMessageTutor (
  messageCounter INTEGER PRIMARY KEY AUTO_INCREMENT,
  student_id INTEGER,
  tutor_id INTEGER,
  subjectType VARCHAR(1000) NOT NULL,
  FOREIGN KEY (student_id) REFERENCES Student(student_id),
  FOREIGN KEY (tutor_id) REFERENCES Tutor(tutor_id)
);

INSERT INTO User (email, username, password_salt, password_hash, firstname, lastname)  VALUES ('hb@bristol.ac.uk', 'boyns123', 'XXX', 'XXXX', 'Harrison', 'Boyns');
INSERT INTO User (email, username, password_salt, password_hash, firstname, lastname)  VALUES ('xh@bristol.ac.uk', 'Cheese', 'XXX', 'XXXX', 'Bones', 'cheese');
INSERT INTO User (email, username, password_salt, password_hash, firstname, lastname)  VALUES ('lb@bristol.ac.uk', 'Behind', 'XXX', 'XXXX', 'Behind', 'You');
INSERT INTO User (email, username, password_salt, password_hash, firstname, lastname)  VALUES ('zx@bristol.ac.uk', 'Headed', 'XXX', 'XXXX', 'Level', 'Headed');
INSERT INTO User (email, username, password_salt, password_hash, firstname, lastname)  VALUES ('4rj@bristol.ac.uk', 'Orr', 'XXX', 'XXXX', 'Giles', 'Orr');
INSERT INTO User (email, username, password_salt, password_hash, firstname, lastname)  VALUES ('123@bristol.ac.uk', 'Maund', 'XXX', 'XXXX', 'Phil', 'Maund');
INSERT INTO User (email, username, password_salt, password_hash, firstname, lastname)  VALUES ('lfhjs@bristol.ac.uk', 'Wetherall', 'XXX', 'XXXX', 'Andrew', 'Wetherall');
INSERT INTO User (email, username, password_salt, password_hash, firstname, lastname)  VALUES ('jdw@bristol.ac.uk', 'Crikey', 'XXX', 'XXXX', 'David', 'Shough');

INSERT INTO Student(user_id) VALUES(12);
INSERT INTO Student(user_id) VALUES(22);
INSERT INTO Student(user_id) VALUES(42);
INSERT INTO Student(user_id) VALUES(62);

INSERT INTO Tutor(user_id, price) VALUES(32, 35);
INSERT INTO Tutor(user_id, price) VALUES(52, 30);
INSERT INTO Tutor(user_id, price) VALUES(2, 50);
INSERT INTO Tutor(user_id, price) VALUES(72, 40);

INSERT INTO Subject(subjectType) VALUES('German');
INSERT INTO Subject(subjectType) VALUES('French');
INSERT INTO Subject(subjectType) VALUES('Latin');
INSERT INTO Subject(subjectType) VALUES('History');
INSERT INTO Subject(subjectType) VALUES('Java');

INSERT INTO TutorSubject(subject_id, tutor_id) VALUES(12, 2);
INSERT INTO TutorSubject(subject_id, tutor_id) VALUES(2, 32);
INSERT INTO TutorSubject(subject_id, tutor_id) VALUES(32, 22);

INSERT INTO TutorSubject(subject_id, tutor_id) VALUES(12, 2);
INSERT INTO TutorSubject(subject_id, tutor_id) VALUES(32, 2);
INSERT INTO TutorSubject(subject_id, tutor_id) VALUES(42, 32);

INSERT INTO StudentReviewTutor(student_id, tutor_id, reviewRanking) VALUES(12, 12, 3);
INSERT INTO StudentReviewTutor(student_id, tutor_id, reviewRanking) VALUES(22, 2, 5);
INSERT INTO StudentReviewTutor(student_id, tutor_id, reviewRanking) VALUES(22, 32, 3);
INSERT INTO StudentReviewTutor(student_id, tutor_id, reviewRanking) VALUES(12, 22, 2);
INSERT INTO StudentReviewTutor(student_id, tutor_id, reviewRanking) VALUES(32, 22, 1);
INSERT INTO StudentReviewTutor(student_id, tutor_id, reviewRanking) VALUES(32, 32, 0);

INSERT INTO StudentMessageTutor(student_id, tutor_id, subjectType) VALUES(12, 22, 'Free next week');
INSERT INTO StudentMessageTutor(student_id, tutor_id, subjectType) VALUES(22, 12, 'Free next week');
INSERT INTO StudentMessageTutor(student_id, tutor_id, subjectType) VALUES(22, 32, 'Free next week');
INSERT INTO StudentMessageTutor(student_id, tutor_id, subjectType) VALUES(32, 32, 'Free next week');
INSERT INTO StudentMessageTutor(student_id, tutor_id, subjectType) VALUES(32, 12, 'Free next week');
INSERT INTO StudentMessageTutor(student_id, tutor_id, subjectType) VALUES(12, 32, 'Free next week');

--      Commands

-- Select all the Student information
SELECT * FROM USER JOIN Student ON Student.user_id = User.user_id;

-- Select tutor name
SELECT User.username, Tutor.price FROM USER JOIN Tutor ON Tutor.user_id = User.user_id ORDER BY Tutor.price ASC;

-- Select all the tutors that do subject X
SELECT User.username FROM User JOIN Tutor ON Tutor.user_id = User.user_id JOIN TutorSubject ON Tutor.tutor_id = TutorSubject.tutor_id JOIN Subject ON TutorSubject.subject_id = Subject.subject_id WHERE Subject.subjectType = 'German';

-- gets the tutor info by name
SELECT * FROM USER JOIN Tutor ON Tutor.user_id = User.user_id WHERE User.username = 'Maund';

-- get all the tutor reviews
SELECT SRT.reviewRanking, U.username FROM StudentReviewTutor AS SRT JOIN Tutor AS T ON T.tutor_id = SRT.tutor_id JOIN USER AS U ON T.user_id = U.user_id ORDER BY SRT.reviewRanking;



SELECT USER.username FROM USER JOIN TUTOR ON Tutor.user_id = User.user_id JOIN TutorSubject ON Tutor.tutor_id = TutorSubject.subject_id JOIN Subject ON Subject.subject_id = TutorSubject.subject_id WHERE Subject.subject_id = 2;
SELECT TUTOR.user_id FROM TUTOR JOIN TutorSubject ON Tutor.tutor_id = TutorSubject.subject_id JOIN Subject ON Subject.subject_id = TutorSubject.subject_id WHERE Subject.subject_id = 2;

SELECT * FROM Tutor JOIN Subject ON Tutor.tutor_id = subject_id;
