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

INSERT INTO Message(student_id, tutor_id, subjectType) VALUES(12, 22, 'Free next week');
INSERT INTO Message(student_id, tutor_id, subjectType) VALUES(22, 12, 'Free next week');
INSERT INTO Message(student_id, tutor_id, subjectType) VALUES(22, 32, 'Free next week');
INSERT INTO Message(student_id, tutor_id, subjectType) VALUES(32, 32, 'Free next week');
INSERT INTO Message(student_id, tutor_id, subjectType) VALUES(32, 12, 'Free next week');
INSERT INTO Message(student_id, tutor_id, subjectType) VALUES(12, 32, 'Free next week');
