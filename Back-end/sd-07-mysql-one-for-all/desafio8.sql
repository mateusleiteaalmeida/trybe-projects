USE SpotifyClone;

DELIMITER $$
CREATE TRIGGER trigger_usuario_delete
BEFORE DELETE ON users
FOR EACH ROW
BEGIN
DELETE FROM musics_history WHERE fk_user_id = OLD.user_id;
DELETE FROM following_artists WHERE fk_user_id = OLD.user_id;
END $$
DELIMITER ;
