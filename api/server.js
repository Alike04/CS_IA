const express = require("express");
const mongoose = require("mongoose");
const boardRouter = require("./routes/boardRoute");
const cardRouter = require("./routes/cardRoute");
const userRoute = require("./routes/userRoute");
const app = express();
const PORT = 8080;

mongoose.connect(
  "mongodb://localhost/testdb",
  () => {
    console.log("connected");
  },
  (e) => {
    console.error(e);
  }
);

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/board", boardRouter);
app.use("/api/card", cardRouter);

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));
