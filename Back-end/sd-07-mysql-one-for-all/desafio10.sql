USE SpotifyClone;
DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico(id INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE musics_total INT;
SELECT COUNT(mh.fk_user_id) AS 'artista'
FROM SpotifyClone.users AS u
INNER JOIN SpotifyClone.musics_history AS mh ON mh.fk_user_id = u.user_id
WHERE u.user_id = id INTO musics_total;
RETURN musics_total;
END $$

DELIMITER ;
