CREATE TABLE species (
    id SERIAL PRIMARY KEY,
    common TEXT,
    scientific TEXT,
    population INTEGER,
    status VARCHAR(2),
    timestamp TIMESTAMP
);

CREATE TABLE individuals (
    id SERIAL PRIMARY KEY,
    nickname TEXT,
    species_id INTEGER REFERENCES species (id),
    timestamp TIMESTAMP
);

CREATE TABLE sightings (
    id SERIAL PRIMARY KEY,
    time_seen TIMESTAMP,  -- could be past time
    individual_id INTEGER REFERENCES individuals (id),
    location TEXT,
    healthy boolean,
    email varchar(320),
    timestamp TIMESTAMP    
);

INSERT INTO species(common, scientific, population, status, timestamp)
     VALUES('Scaly Doggo', 'Blue Eyes White Dragon', 123, 'EN', '2021-03-24T22:46:13.221Z');

INSERT INTO species(common, scientific, population, status, timestamp)
     VALUES('Machu Pichu', 'Pika Pikachu', 2500, 'EN', '2021-03-24T22:49:11.448Z');
     

INSERT INTO individuals(nickname, species_id, timestamp)
     VALUES('Ash', 2, '2021-03-24T22:52:42.656Z');

INSERT INTO individuals(nickname, species_id, timestamp)
     VALUES('Blueberry', 1, '2021-03-24T22:53:54.302Z');

INSERT INTO individuals(nickname, species_id, timestamp)
     VALUES('PicaQ', 2, '2021-03-24T22:55:21.267Z');


INSERT INTO sightings(time_seen, individual_id, location, healthy, email, timestamp)
     VALUES('2021-03-24T22:57:29.706Z', 3, 'their room', TRUE, 'picaq@pi.com', '2021-03-24T22:59:15.611Z');

INSERT INTO sightings(time_seen, individual_id, location, healthy, email, timestamp)
     VALUES('2021-03-24T22:59:15.611Z', 2, 'flying over GG bridge', TRUE, 'lillies@flower.com', '2021-03-24T23:01:36.192Z');

INSERT INTO sightings(time_seen, individual_id, location, healthy, email, timestamp)
     VALUES('2021-03-24T23:01:36.192Z', 3, 'bathroom', FALSE, 'blue@pi.com', '2021-03-24T23:03:13.240Z');