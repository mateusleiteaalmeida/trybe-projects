CREATE VIEW perfil_artistas AS
SELECT ar.artist_name AS 'artista',
al.album_title AS 'album',
COUNT(fa.fk_artist_id) AS 'seguidores'
FROM SpotifyClone.artists AS ar
INNER JOIN SpotifyClone.albums AS al ON al.fk_artist_id = ar.artist_id
INNER JOIN SpotifyClone.following_artists AS fa ON fa.fk_artist_id = ar.artist_id
GROUP BY ar.artist_name, al.album_title
ORDER BY 3 DESC, 1, 2;
