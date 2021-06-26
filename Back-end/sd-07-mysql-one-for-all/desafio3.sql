CREATE VIEW historico_reproducao_usuarios AS
SELECT u.user_name AS 'usuario',
m.music_name AS 'nome'
FROM SpotifyClone.users AS u
INNER JOIN SpotifyClone.musics_history AS mh ON mh.fk_user_id = u.user_id
INNER JOIN SpotifyClone.musics AS m ON m.music_id = mh.fk_music_id
ORDER BY 1, 2;
