USE SpotifyClone;
DELIMITER $$

CREATE PROCEDURE albuns_do_artista(IN artista VARCHAR(100))
BEGIN
SELECT ar.artist_name AS 'artista',
al.album_title AS 'album'
FROM artists AS ar
INNER JOIN albums AS al ON al.fk_artist_id = ar.artist_id
WHERE artista = ar.artist_name;
END $$

DELIMITER ;
