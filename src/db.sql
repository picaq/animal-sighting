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