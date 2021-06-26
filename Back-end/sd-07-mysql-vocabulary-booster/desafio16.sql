USE hr
DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(emailFuncionario VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
DECLARE total_jobs INT;
SELECT COUNT(jh.EMPLOYEE_ID)
FROM job_history AS jh
INNER JOIN employees AS e ON jh.EMPLOYEE_ID = e.EMPLOYEE_ID
WHERE e.EMAIL = emailFuncionario
INTO total_jobs;
RETURN total_jobs;
END $$

DELIMITER ;
