const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const {
  authRoute,
  userRoute,
  boardRoute,
  listRoute,
  cardRoute,
} = require("./routers");
const cors = require('cors');

const app = express();

app.use(cors())

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   next();
// });

const jsonParser = express.json();
// app.use(cors());
app.use(jsonParser);

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/board", boardRoute);
app.use("/api/list", listRoute);
app.use("/api/card", cardRoute);

app.use(errorHandler);

module.exports = app;
