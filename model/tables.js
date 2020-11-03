module.exports = `

-- Drop tables if they exist

DROP TABLE IF EXISTS loans;
DROP TABLE IF EXISTS savings;
DROP TABLE IF EXISTS users;

-- (Re)create tables

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    last_name VARCHAR(50) not null,
    first_name VARCHAR(50) not null,
    NIN int not null,
    email varchar(50) not null,
    phone_number int not null,
    password varchar(50) not null
);

CREATE TABLE loans (
    id INT NOT NULL PRIMARY KEY  AUTO_INCREMENT,
    loans DECIMAL not null,
    usersId INT not null,
    FOREIGN KEY (usersId) REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE TABLE savings(
    id INT NOT NULL PRIMARY KEY  AUTO_INCREMENT,
    savings DECIMAL not null,
    usersId INT not null,
    FOREIGN KEY (usersId) REFERENCES users(id)
        ON DELETE CASCADE
);

-- Add some data into each table

INSERT INTO users 
    (last_name, first_name, NIN, email, phone_number, password)
VALUES
    ("Mbabazi", "Harriet", 12304478, "mbababzy.h@gmail.com", 915403638, "12345"), -- ID = 1
    ("Nakyeyune", "Naome", 208599665, "naomem@yahoo.com", 912908826, "12345"), -- ID = 2
    ("Mugisha", "Annet", 123456789, "annetmugisha@hotmail.com", 912020932, "12345"); -- ID = 3

INSERT INTO loans (loans, usersId)
VALUES
    (5000, 1),
    (0, 2),
    (100, 3);

INSERT INTO savings (savings, usersId)
VALUES
    (0, 1),
    (3000, 2),
    (100, 3);

-- 
-- Query the data
-- 

SELECT * FROM users;

SELECT users.last_name, users.last_name, users.NIN, users.email, users.phone_number, loans.loans
FROM users
LEFT JOIN loans ON users.id = loans.usersId;

SELECT users.last_name, users.last_name, users.NIN, users.email, users.phone_number, savings.savings
FROM users
LEFT JOIN savings ON users.id = savings.usersId;`
