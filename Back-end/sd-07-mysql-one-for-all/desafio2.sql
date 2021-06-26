CREATE VIEW estatisticas_musicais AS
SELECT COUNT(DISTINCT m.music_name) AS 'cancoes',
COUNT(DISTINCT ar.artist_name) AS 'artistas',
COUNT(DISTINCT al.album_title) AS 'albuns'
FROM SpotifyClone.musics AS m
INNER JOIN SpotifyClone.albums AS al ON m.fk_album_id = al.album_id
INNER JOIN SpotifyClone.artists AS ar ON ar.artist_id = al.fk_artist_id;
