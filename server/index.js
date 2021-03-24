const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
// gives access to request body to get json data
app.use(express.json());

app.listen(9000, () => {
    console.log("server has started on port 9000")
});
