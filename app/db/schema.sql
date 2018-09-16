DROP DATABASE  IF EXISTS match_db;

CREATE DATABASE match_db;

USE match_db;

CREATE TABLE question (
	id INT NOT NULL AUTO_INCREMENT,
	question VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);



CREATE TABLE respond (
	id INT NOT NULL AUTO_INCREMENT,
	person_name VARCHAR(255) NOT NULL,
	question_id INT NOT NULL,
	answer_scale INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (question_id) REFERENCES question(id)
);
