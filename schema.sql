




DROP DATABASE IF EXISTS similars_db;




CREATE DATABASE similars_db;



USE similars_db;



CREATE TABLE attributes (
  id SERIAL PRIMARY KEY, 
  movieId INT NOT NULL,
  title   TEXT NOT NULL,
  genre TEXT NOT NULL,
  supportingActors1 VARCHAR(100) NULL,
  supportingActors2 VARCHAR(100) NULL,
  supportingActors3 VARCHAR(100) NULL,
  producers VARCHAR(100) NULL, 
  studio VARCHAR(100) NULL, 
  subtitles TEXT NULL,
  audioLanguages VARCHAR(100) NULL, 
  purchaseRights TEXT NULL, 
  formats TEXT NULL, 
  devices TEXT NULL, 
  poster VARCHAR(100)

);


