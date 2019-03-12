DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ("New Bacon-ings Burger");
INSERT INTO burgers (burger_name) VALUES ("Olive and Let Die Burger");
INSERT INTO burgers (burger_name, devoured) VALUES ("Girls Just Want to Have Fennel Burger", true);
INSERT INTO burgers (burger_name) VALUES ("Bruschetta Bout It Burger");
INSERT INTO burgers (burger_name, devoured) VALUES ("Don't You Four Cheddar 'Bout Me Burger", true);

SELECT * FROM burgers;