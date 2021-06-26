CREATE VIEW top_3_artistas AS
SELECT ar.artist_name AS 'artista',
COUNT(fa.fk_artist_id) AS 'seguidores'
FROM SpotifyClone.artists AS ar
INNER JOIN SpotifyClone.following_artists AS fa ON fa.fk_artist_id = ar.artist_id
GROUP BY ar.artist_name
ORDER BY 2 DESC, 1
LIMIT 3;
