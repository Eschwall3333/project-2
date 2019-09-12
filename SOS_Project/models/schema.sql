CREATE DATABASE usa_shelters_db;
USE usa_shelters_db;

CREATE TABLE locations (
id INT NOT NULL AUTO_INCREMENT,
shelter_name VARCHAR(100) NULL,
address VARCHAR(100) NULL,
city VARCHAR(100) NULL,
state VARCHAR(100) NULL,
zip VARCHAR(100) NULL,
class VARCHAR(100) NULL,
situation VARCHAR(100) NULL,
PRIMARY KEY (id)
);

INSERT INTO locations (shelter_name, address, city, state, zip, class, situation) VALUES ('CHEROKEE RECREATION AND PARKS AGENCY', '7545 MAIN ST', 'WOODSTOCK', 'GA', '30188', 'EVAC', 'OPEN');
INSERT INTO locations (shelter_name, address, city, state, zip, class, situation) VALUES ('FIRST BAPTIST CHURCH OF WOODSTOCK', '11905 HWY 92', 'WOODSTOCK', 'GA', '30188', 'EVAC', 'OPEN');
INSERT INTO	locations (shelter_name, address, city, state, zip, class, situation) VALUES ('FCSS ROSWELL HIGH SCHOOL', '11595 KING ROAD', 'ROSWELL', 'GA', '30175', 'POST', 'OPEN');
INSERT INTO locations (shelter_name, address, city, state, zip, class, situation) VALUES ('SAINT FRANCIS OF ASSISI CATHOLIC CHURCH', '850 DOUTHIT FERRY RD', 'CARTERSVILLE', 'GA', '30120', 'EVAC', 'OPEN');
INSERT INTO locations (shelter_name, address, city, state, zip, class, situation) VALUES ('WOODLAND HIGH SCHOOL', '800 OLD ALABAMA RD', 'CARTERSVILLE', 'GA', '30121', 'EVAC', 'OPEN');