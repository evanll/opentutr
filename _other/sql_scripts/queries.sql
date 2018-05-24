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


SELECT S.name, T.rate, U.firstname, U.lastname FROM Subject AS S
JOIN TutorSubject AS TS ON S.subject_id = TS.subject_id
JOIN Tutor AS T ON T.tutor_id = TS.tutor_id
JOIN User AS U ON T.user_id = U.user_id
WHERE S.subject_id = ?
ORDER BY T.rate



SELECT U.firstname, U.lastname, T.description, S.name, T.rate FROM Tutor AS T
JOIN User AS U ON T.user_id = U.user_id
JOIN TutorSubject AS TS ON T.tutor_id = TS.tutor_id
JOIN Subject AS S ON S.subject_id = TS.subject_id
WHERE S.subject_id = ?
