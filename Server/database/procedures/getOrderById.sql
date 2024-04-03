DELIMITER //

CREATE PROCEDURE GetOrdersByUserId (
    IN p_userId INT
)
BEGIN
    SELECT * FROM Order WHERE userId = p_userId;
END //

DELIMITER ;
