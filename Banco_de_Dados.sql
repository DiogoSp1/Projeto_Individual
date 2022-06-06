CREATE DATABASE projeto_Individual;
USE projeto_Individual;

CREATE TABLE mugiwara (
	id_Mug INT PRIMARY KEY AUTO_INCREMENT,
	nome_Mug VARCHAR (20) NOT NULL
);

CREATE TABLE usuario (
	id_Usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome_Usuario VARCHAR (50) NOT NULL,
    apelido VARCHAR (16) NOT NULL,
    email VARCHAR (70) NOT NULL,
    senha VARCHAR (20),
    fk_Mug INT NOT NULL,
    FOREIGN KEY (fk_Mug) REFERENCES mugiwara(id_Mug),
    url_Img VARCHAR(5000)
);

INSERT INTO mugiwara (nome_Mug) VALUES
('Luffy'),
('Roronoa Zoro'),
('Sanji'),
('Chopper'),
('Usopp'),
('Nami'),
('Nico Robin'),
('Franky'),
('Brook'),
('Jinbei');

CREATE TABLE batalha (
    id_Batalha INT PRIMARY KEY AUTO_INCREMENT,
    fk_Usuario INT NOT NULL,
    resultado VARCHAR(7),
    adversario INT NOT NULL,
    ganhos DOUBLE,
    FOREIGN KEY (fk_Usuario) REFERENCES usuario(id_Usuario),
    FOREIGN KEY (adversario) REFERENCES mugiwara(id_Mug)
);