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


-- select * from question q left join respond r  on  r.question_id = q.id;



-- ALTER TABLE respond
-- ADD date TIMESTAMP NOT NULL DEFAULT CURRENT-TIMESTAMP AFTER answer_scale;
add time:
ALTER TABLE respond ADD d TIMESTAMP;