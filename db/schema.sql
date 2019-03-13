DROP DATABASE IF EXISTS woof_db;
CREATE DATABASE woof_db;

USE woof_db;

CREATE TABLE customers (
    id INT NOT NULL AUTO_INCREMENT,
    customer_name VARCHAR (100) NOT NULL,
    email VARCHAR( 100) NOT NULL,
    customer_password VARCHAR (100) NOT NULL,
    street VARCHAR (500) NOT NULL,
    city VARCHAR (500) NOT NULL,
    customer_state VARCHAR (500) NOT NULL,
    zip VARCHAR (500) NOT NULL,
    pet_name1 VARCHAR (500) NOT NULL,
    pet_name2 VARCHAR (500),
    pet_name3 VARCHAR (500),
    comments VARCHAR (500),
    PRIMARY KEY (id)

);

CREATE TABLE dogs (
    id INT NOT NULL AUTO_INCREMENT,
    dog_name VARCHAR (100) NULL,
    customer_name VARCHAR (100) NOT NULL,
    PRIMARY KEY (id)
)

-- CREATE TABLE dogOwners (
--     id INT NOT NULL AUTO_INCREMENT,
--     dogID,
--     customerID
-- )