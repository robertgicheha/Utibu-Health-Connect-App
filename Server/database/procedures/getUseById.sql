DELIMITER //

CREATE PROCEDURE GetUserById (
    IN p_id INT
)
BEGIN
    SELECT * FROM User WHERE id = p_id;
END //

DELIMITER ;
