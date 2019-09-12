CREATE DATABASE IF NOT EXISTS searchHistory_db;
USE history_db;

CREATE TABLE searchHistory (
id int NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NULL,
address VARCHAR(100) NULL,
address2 VARCHAR(100) NULL,
city VARCHAR(100) NULL,
state VARCHAR(100) NULL,
zip VARCHAR(100) NULL,
type VARCHAR(100) NULL,
status VARCHAR(100) NULL,
latitude VARCHAR(100) NULL,
longitude VARCHAR(100) NULL,
PRIMARY KEY (id)
);

INSERT INTO searchHistory (name, address, address2, city, state, zip, type, status, latitude, longitude);
