USE hr
DELIMITER $$

CREATE PROCEDURE exibir_historico_completo_por_funcionario(IN emailFuncionario VARCHAR(100))
BEGIN
SELECT CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS 'Nome completo',
d.DEPARTMENT_NAME AS 'Departamento',
j.JOB_TITLE AS 'Cargo'
FROM job_history as jh
INNER JOIN employees AS e ON jh.EMPLOYEE_ID = e.EMPLOYEE_ID
INNER JOIN jobs as j ON jh.JOB_ID = j.JOB_ID
INNER JOIN departments as d ON jh.DEPARTMENT_ID = d.DEPARTMENT_ID
WHERE e.EMAIL = emailFuncionario
ORDER BY 2, 3;
END $$

DELIMITER ;
