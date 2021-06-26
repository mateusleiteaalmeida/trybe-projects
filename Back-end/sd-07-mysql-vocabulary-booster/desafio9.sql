SELECT CONCAT(e.firstName, ' ', e.lastName) AS 'Nome completo',
COUNT(o.EmployeeID) AS 'Total de pedidos'
FROM w3schools.employees AS e, w3schools.orders AS o
WHERE e.EmployeeID = o.EmployeeID
GROUP BY CONCAT(e.firstName, ' ', e.lastName)
ORDER BY 2;
