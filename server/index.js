const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
// gives access to request body to get json data
app.use(express.json());

app.listen(9000, () => {
    console.log("server has started on port 9000")
});


// ROUTES

// create a sighting
app.post("/sighting", async(req, res) => {
    try {
        // console.log(req.body);
        const { time_seen, individual_id, location, healthy, email, timestamp } = req.body;
        const newSighting = await pool.query(`
        INSERT INTO sightings(time_seen, individual_id, location, healthy, email, timestamp)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *;
        `,
         [time_seen, individual_id, location, healthy, email, timestamp]
        );

        res.json(newSighting.rows[0]);       
    } catch (err) {
        console.log(err.message);
    }
})


// get all sightings

app.get("/sighting", async(req, res) => {
    try {
        const allSightings = await pool.query("SELECT * FROM sightings");
        res.json(allSightings.rows); // returns an array
    } catch (error) {
        console.error(error.message);
    }
})

// get a sightings

app.get("/sighting/:id", async (req, res) => {
    try {
        // console.log(req.params);
        const { id } = req.params;
        const sighting = await pool.query(`
        SELECT * FROM sightings
        WHERE id = $1,
        `, [id] );
        res.json(sighting.rows[0]);
    } catch (error) {
        console.error(error.mesage);
    }
})