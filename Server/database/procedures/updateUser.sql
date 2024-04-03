DELIMITER //

CREATE PROCEDURE UpdateUser (
    IN p_id INT,
    IN p_username VARCHAR(255),
    IN p_email VARCHAR(255),
    IN p_password VARCHAR(255)
)
BEGIN
    UPDATE User
    SET username = p_username, email = p_email, password = p_password
    WHERE id = p_id;
END //

DELIMITER ;
