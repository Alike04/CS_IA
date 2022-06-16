const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8080;

mongoose.connect("mongodb://localhost/testdb");

app.use(express.json());

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));
