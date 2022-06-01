-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
CREATE DATABASE projeto_Individual;
USE projeto_Individual;

CREATE TABLE usuario (
	id_Usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome_Usuario VARCHAR (50) NOT NULL,
    data_Nasc DATE NOT NULL,
    cpf VARCHAR (14) NOT NULL,
    senha VARCHAR (20),
    descricao VARCHAR (1000) NOT NULL
);

CREATE TABLE mural (
	id_Mural INT PRIMARY KEY AUTO_INCREMENT,
    fk_Usuario INT NOT NULL,
    nome_mural VARCHAR (50) NOT NULL,
    conteudo VARCHAR (1000) NOT NULL,
    FOREIGN KEY (fk_Usuario) REFERENCES usuario(id_Usuario)
);

CREATE TABLE mugiwara (
	id_Mug INT PRIMARY KEY AUTO_INCREMENT,
	nome_Mug VARCHAR (20) NOT NULL
);

INSERT INTO mugiwara (nome_Mug) VALUES
('Luffy'),
('Roronoa Zoro'),
('Sanji'),
('Chopper'),
('Nami'),
('Nico Robin'),
('Usopp'),
('Franky'),
('Brook'),
('Jinbei');

CREATE TABLE mugiwara_Favorito (
    fk_Usuario INT UNIQUE NOT NULL,
    fk_Mug INT NOT NULL,
    FOREIGN KEY (fk_Usuario) REFERENCES usuario(id_Usuario),
    FOREIGN KEY (fk_Mug) REFERENCES mugiwara(id_Mug)
);



/* para sql server - remoto - produção */
CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY IDENTITY(1,1),
	descricao VARCHAR(300)
);

/* altere esta tabela de acordo com o que está em INSERT de sua API do arduino */

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT FOREIGN KEY REFERENCES aquario(id)
);
