-- Create user
CREATE USER 'dev'@'localhost' IDENTIFIED BY 'mvU221';

-- Create DB
DROP DATABASE IF EXISTS TutorApp;
CREATE DATABASE TutorApp;

GRANT ALL PRIVILEGES ON TutorApp.* TO 'dev'@'localhost';

-- Reload privileges
FLUSH PRIVILEGES;
