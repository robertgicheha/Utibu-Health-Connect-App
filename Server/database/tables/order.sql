CREATE TABLE Order (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userId INT NOT NULL,
    medicationId INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(id),
    FOREIGN KEY (medicationId) REFERENCES Medication(id)
);