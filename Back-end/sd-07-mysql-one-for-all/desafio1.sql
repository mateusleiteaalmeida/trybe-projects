DROP DATABASE IF EXISTS SpotifyClone;

CREATE DATABASE SpotifyClone;

USE SpotifyClone;

CREATE TABLE plans (
plan_id INT PRIMARY KEY AUTO_INCREMENT,
plan_name VARCHAR(100) NOT NULL,
plan_price DECIMAL(3, 2) NOT NULL
);

CREATE TABLE artists (
artist_id INT PRIMARY KEY AUTO_INCREMENT,
artist_name VARCHAR(100) NOT NULL
);

CREATE TABLE users (
user_id INT PRIMARY KEY AUTO_INCREMENT,
user_name VARCHAR(100) NOT NULL,
user_age INT NOT NULL,
fk_plan_id INT NOT NULL,
FOREIGN KEY (fk_plan_id) REFERENCES plans (plan_id)
);

CREATE TABLE following_artists (
fk_user_id INT NOT NULL,
fk_artist_id INT NOT NULL,
FOREIGN KEY (fk_user_id) REFERENCES users (user_id),
FOREIGN KEY (fk_artist_id) REFERENCES artists (artist_id),
PRIMARY KEY (fk_user_id, fk_artist_id)
);

CREATE TABLE albums (
album_id INT PRIMARY KEY AUTO_INCREMENT,
album_title VARCHAR(100) NOT NULL,
fk_artist_id INT NOT NULL,
FOREIGN KEY (fk_artist_id) REFERENCES artists (artist_id)
);

CREATE TABLE musics (
music_id INT PRIMARY KEY AUTO_INCREMENT,
music_name VARCHAR(100) NOT NULL,
fk_album_id INT NOT NULL,
FOREIGN KEY (fk_album_id) REFERENCES albums (album_id)
);

CREATE TABLE musics_history (
fk_user_id INT NOT NULL,
fk_music_id INT NOT NULL,
FOREIGN KEY (fk_user_id) REFERENCES users (user_id),
FOREIGN KEY (fk_music_id) REFERENCES musics (music_id),
PRIMARY KEY (fk_user_id, fk_music_id)
);

INSERT INTO plans (plan_name, plan_price)
VALUES
('gratuito', 0),
('universitário', 5.99),
('familiar', 7.99);

INSERT INTO artists (artist_name)
VALUES
('Walter Phoenix'),
('Peter Strong'),
('Lance Day'),
('Freedie Shannon');

INSERT INTO users (user_name, user_age, fk_plan_id)
VALUES
('Thati', 23, 1),
('Cintia', 35, 3),
('Bill', 20, 2),
('Roger', 45, 1);

INSERT INTO following_artists (fk_user_id, fk_artist_id)
VALUES
(1, 1),
(1, 4),
(1, 3),
(2, 1),
(2, 3),
(3, 2),
(3, 1),
(4, 4);

INSERT INTO albums (album_title, fk_artist_id)
VALUES
('Envious', 1),
('Exuberant', 1),
('Hallowed Steam', 2),
('Incandescent', 3),
('Temporary Culture', 4);

INSERT INTO musics (music_name, fk_album_id)
VALUES
('Soul For Us', 1),
('Reflections Of Magic', 1),
('Dance With Her Own', 1),
('Troubles Of My Inner Fire', 2),
('Time Fireworks', 2),
('Magic Circus', 3),
('Honey, So Do I', 3),
("Sweetie, Let's Go Wild", 3),
('She Knows', 3),
('Fantasy For Me', 4),
('Celebration Of More', 4),
('Rock His Everything', 4),
('Home Forever', 4),
('Diamond Power', 4),
("Honey, Let's Be Silly", 4),
('Thang Of Thunder', 5),
('Words Of Her Life', 5),
('Without My Streets', 5);

INSERT INTO musics_history (fk_user_id, fk_music_id)
VALUES
(1, 1),
(1, 6),
(1, 14),
(1, 16),
(2, 13),
(2, 17),
(2, 2),
(2, 15),
(3, 4),
(3, 16),
(3, 6),
(4, 3),
(4, 18),
(4, 11);
