CREATE VIEW top_2_hits_do_momento AS
SELECT m.music_name AS 'cancao',
COUNT(mh.fk_music_id) AS 'reproducoes'
FROM SpotifyClone.musics as m
INNER JOIN SpotifyClone.musics_history AS mh ON mh.fk_music_id = m.music_id
GROUP BY m.music_name
ORDER BY 2 DESC, 1
LIMIT 2;
