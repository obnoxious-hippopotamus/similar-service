 -- this is set as a schema script - "mysql -u root < schema.sql",



--  DROP DATABASE IF IT ALREADY EXISTS
DROP DATABASE IF EXISTS similars_db;



--  CREATE DATABASE 
CREATE DATABASE similars_db;


--  USE DATABASE
USE similars_db;


--  CREATE TABLES
CREATE TABLE attributes (
  id SERIAL PRIMARY KEY, 
  movieId INT NOT NULL,
  title   TEXT NOT NULL,
  supportingActors VARCHAR(100) NULL,
  producers VARCHAR(100) NULL, 
  studio VARCHAR(100) NULL, 
  subtitles VARCHAR(100) NULL,
  audioLanguages VARCHAR(100) NULL, 
  purchaseRights VARCHAR(100) NULL, 
  formats VARCHAR(100) NULL, 
  devices VARCHAR(100) NULL, 
  poster VARCHAR(100)

);


--  SEED DATA