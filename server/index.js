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
        const { time_seen, individual_id, location, healthy, email, timeStamp } = req.body;
        const newSighting = await pool.query(`
        INSERT INTO sightings(time_seen, individual_id, location, healthy, email, timestamp)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *;
        `,
         [time_seen, individual_id, location, healthy, email, timeStamp]
        )
    } catch (err) {
        console.log(err.message);
    }
})


// get all sightings

