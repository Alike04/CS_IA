const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const {
  authRoute,
  userRoute,
  boardRoute,
  listRoute,
  cardRoute,
} = require("./routers");

const app = express();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const jsonParser = express.json();
// app.use(cors());
app.use(jsonParser);

app.get("/api/test", (req, res) => {
  res.status(200).json({ message: "it works!" });
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/board", boardRoute);
app.use("/api/list", listRoute);
app.use("/api/card", cardRoute);

app.use(errorHandler);

module.exports = app;
