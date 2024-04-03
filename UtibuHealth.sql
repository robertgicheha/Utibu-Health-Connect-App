-- CUSTOMER FUNCTIONALITY 
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
-- Create User table
CREATE TABLE User (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Create Medication table
CREATE TABLE Medication (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    quantity INT NOT NULL
);

-- Create Order table
CREATE TABLE Order (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userId INT NOT NULL,
    medicationId INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(id),
    FOREIGN KEY (medicationId) REFERENCES Medication(id)
);

-- Insert dummy data into User table
INSERT INTO User (username, email, password) VALUES
('user1', 'user1@example.com', 'password1'),
('user2', 'user2@example.com', 'password2'),
('user3', 'user3@example.com', 'password3');

-- Insert dummy data into Medication table
INSERT INTO Medication (name, quantity) VALUES
('Medication A', 100),
('Medication B', 200),
('Medication C', 150);

-- Insert dummy data into Order table
INSERT INTO Order (userId, medicationId, quantity) VALUES
(1, 1, 2),
(1, 2, 3),
(2, 3, 1);
