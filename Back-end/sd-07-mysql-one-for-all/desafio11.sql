CREATE VIEW cancoes_premium AS
SELECT m.music_name AS 'nome',
COUNT(mh.fk_music_id) AS 'reproducoes'
FROM SpotifyClone.musics AS m
INNER JOIN SpotifyClone.musics_history as mh ON mh.fk_music_id = m.music_id
INNER JOIN SpotifyClone.users as u ON u.user_id = mh.fk_user_id
INNER JOIN SpotifyClone.plans as p ON p.plan_id = u.fk_plan_id
WHERE p.plan_name = 'familiar' OR p.plan_name = 'universitário'
GROUP BY m.music_name
ORDER BY 1;
