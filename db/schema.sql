DROP DATABASE IF EXISTS woof_db;
CREATE DATABASE woof_db;

USE woof_db;

CREATE TABLE customers (
    id INT NOT NULL AUTO_INCREMENT,
    customer_name VARCHAR (100) NULL,
    customer_address VARCHAR (500) NULL,
    PRIMARY KEY (id)

);

CREATE TABLE dogs (
    id INT NOT NULL AUTO_INCREMENT,
    dog_name VARCHAR (100) NULL,
    customer_name (VARCHAR (100) NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE dogOwners (
    id INT NOT NULL AUTO_INCREMENT,
    dogID,
    customerID
)