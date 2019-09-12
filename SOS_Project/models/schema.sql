DROP DATABASE IF EXISTS sosdb;
CREATE DATABASE sosdb;


USE sosdb; 

CREATE TABLE PriorSearches(
    shelterName INT NOT NULL,
    county VARCHAR (100) NULL,
    address VARCHAR (100) NULL,
    city VARCHAR (100) NULL,
    state VARCHAR (100) NULL,
    zip VARCHAR (100) NULL,
    PRIMARY KEY (sheltherName)
);
