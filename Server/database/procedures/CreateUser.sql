DELIMITER //

CREATE PROCEDURE InsertUser (
    IN p_username VARCHAR(255),
    IN p_email VARCHAR(255),
    IN p_password VARCHAR(255)
)
BEGIN
    INSERT INTO User (username, email, password)
    VALUES (p_username, p_email, p_password);
END //

DELIMITER ;
