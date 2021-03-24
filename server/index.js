const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.listen(9000, () => {
    console.log("server has started on port 9000")
})
