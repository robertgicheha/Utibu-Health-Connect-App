DELIMITER //

CREATE PROCEDURE InsertOrder (
    IN p_userId INT,
    IN p_medicationId INT,
    IN p_quantity INT
)
BEGIN
    INSERT INTO Order (userId, medicationId, quantity)
    VALUES (p_userId, p_medicationId, p_quantity);
END //

DELIMITER ;
